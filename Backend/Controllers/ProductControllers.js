import productModel from "../Database/models/ProductModel.js";
import slugify from "slugify";
import { v2 } from "cloudinary";
import Category from "../Database/models/CategoryModel.js";

export const CreateProductController = async (req, res) => {
    try {
        const { name, description, brand, stock, price, discountedPrice, category, tags, isFeatured, status, colors, sizes, ratings } = req.body;
        const files = req.files;
        const images = files.images.map((img) => ({
            url: img.path,
            public_id: img.filename
        }))
        let parsedTags = [];
        if (tags) {
            try {
                parsedTags = JSON.parse(tags);
            } catch (error) {
                parsedTags = [];
            }
        }
        let parsedColors = [];
        if (colors) {
            try {
                parsedColors = JSON.parse(colors)
            } catch (error) {
                parsedColors = [];
            }
        }
        let parseSizes = [];
        if (sizes) {
            try {
                parseSizes = JSON.parse(sizes);
            } catch (error) {
                parseSizes = [];
            }
        }
        let parsedRatings = { average: 0, count: 0 };
        if (ratings) {
            try {
                parsedRatings = JSON.parse(ratings);
            } catch (error) {
                parsedRatings = { average: 0, count: 0 };
            }
        }
        const product = await productModel.create({
            name,
            slug: slugify(name, { lower: true }),
            description,
            brand,
            stock,
            category,
            price,
            discountedPrice: discountedPrice ? discountedPrice : 0,
            colors: parsedColors,
            sizes: parseSizes,
            images: images,
            ratings: parsedRatings,
            isFeatured: isFeatured || true,
            tags: parsedTags,
            status: status ? status : "active"
        })
        return res.status(200).send({ success: true, message: "product created successfully", product });
    } catch (error) {
        return res.status(500).send({ success: false, message: error.message })
    }
}

export const GetAllProductsController = async (req, res) => {
    try {
        const { brand, category, colors, isFeatured, status, page = 1, limit = 10, sortBy = "createdAt", order = "desc" } = req.query;
        let filter = {};
        if (brand) filter.brand = brand;

        if (category) {
            const categoriesArray = category.split(",");
            let categoryIds = [];
            for (let catName of categoriesArray) {
                const parentCategory = await Category.findOne({
                    name: { $regex: `${catName}`, $options: 'i' }
                })

                if (!parentCategory) continue;

                const subCategories = await Category.find({
                    parent: parentCategory._id
                })

                const subNestedCategory = await Category.find({
                    parent: { $in: subCategories.map((cat) => cat._id) }
                })

                categoryIds.push(parentCategory._id, ...subCategories.map((cat) => cat._id), ...subNestedCategory.map((cat) => cat._id));
            }
            if (categoryIds.length > 0) {
                filter.category = { $in: categoryIds }
            } else {
                return res.status(200).send({ success: true, page: Number(page), pages: 0, products: [] });
            }
        }

        if (colors) {
            if (colors.includes(",")) {
                filter.colors = { $in: colors.split(",") };
            } else {
                filter.colors = colors;
            }
        }
        if (isFeatured) filter.isFeatured = isFeatured === "true";
        if (status) filter.status = status;
        const skip = ((page - 1) * limit);
        const sortOption = { [sortBy]: order === "desc" ? -1 : 1 };
        const products = await productModel.find(filter).populate("category", "name slug").skip(skip).limit(Number(limit)).sort(sortOption);
        const total = await productModel.countDocuments(filter);
        return res.status(200).send({ success: true, total: total, page: Number(page), pages: Math.ceil(total / limit), products });
    } catch (error) {
        return res.status(500).send({ success: false, message: error.message })
    }
}

export const SearchProductController = async (req, res) => {
    try {
        const { search } = req.query;
        const product = await productModel.find({
            $or: [
                { name: { $regex: `${search}`, $options: 'i' } },
                { description: { $regex: `${search}`, $options: 'i' } },
                { category: { $regex: `${search}`, $options: 'i' } },
                { brand: { $regex: `${search}`, $options: 'i' } },
                { price: { $regex: `${search}`, $options: 'i' } },
            ]
        })
        if (!product || !product.length) {
            return res.status(404).send({ success: false, message: "product not found" });
        }
        return res.status(200).send({ success: true, message: "search product successfully", product });
    } catch (error) {
        return res.status(500).send({ success: false, message: error.message });
    }
}

export const GetSingleProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id).populate("category", "name slug");
        if (!product) {
            return res.status(404).send({ success: false, message: "product not found!" });
        }
        return res.status(200).send({ success: true, product })
    } catch (error) {
        return res.status(500).send({ success: false, message: error.message })
    }
}

export const DeleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).send({ success: false, message: "product not found!" });
        }
        if (product.images && product.images.length > 0) {
            for (let img of product.images) {
                await v2.uploader.destroy(img.public_id);
            }
        }
        await productModel.deleteOne({ _id: id });
        return res.status(200).send({ success: true, message: "product deleted successfully" });
    } catch (error) {
        return res.status(500).send({ success: false, message: error.message })
    }
}

export const UpdateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, brand, stock, price, discountedPrice, category, tags, isFeatured, status, colors, sizes, ratings } = req.body;
        const files = req.files;

        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).send({ success: false, message: "product not found!" });
        }
        if (product.images && product.images.length > 0) {
            for (let img of product.images) {
                await v2.uploader.destroy(img.public_id);
            }
        }
        const images = files.images.map((img) => ({
            url: img.path,
            public_id: img.filename
        }))
        let parsedColors = [];
        if (colors) {
            try {
                parsedColors = JSON.parse(colors)
            } catch (error) {
                parsedColors = [];
            }
        }
        let parsedSizes = [];
        if (sizes) {
            try {
                parsedSizes = JSON.parse(sizes)
            } catch (error) {
                parsedSizes = [];
            }
        }
        let parsedRatings = { average: 0, count: 0 };
        if (ratings) {
            try {
                parsedRatings = JSON.parse(ratings);
            } catch (error) {
                parsedRatings = { average: 0, count: 0 };
            }
        }
        product.name = name || product.name;
        product.slug = slugify(name, { lower: true }) || product.slug;
        product.description = description || product.description;
        product.brand = brand || product.brand;
        product.stock = stock || product.stock;
        product.price = price || product.price;
        product.discountedPrice = discountedPrice || product.discountedPrice;
        product.category = category || product.category;
        product.colors = parsedColors || product.colors;
        product.sizes = parsedSizes || product.sizes;
        product.ratings = parsedRatings || product.ratings;
        product.images = images || product.images;
        product.isFeatured = isFeatured || product.isFeatured;
        product.tags = tags ? tags.split(",") : product.tags;
        product.status = status || product.status;

        await product.save();

        return res.status(200).send({ success: true, message: "product updated successfully", product })
    } catch (error) {
        return res.status(500).send({ success: false, message: error.message })
    }
}

