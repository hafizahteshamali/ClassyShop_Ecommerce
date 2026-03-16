import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxlength: 200
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Product price must be positive"]
    },
    discountedPrice: {
        type: Number,
        required: true,
        min: [0, "Product price must be positive"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    images: [
        {
            url:{type: String, required: true},
            public_id:{type: String, required: true}
        },
    ],
    stock: {
        type: Number,
        required: true,
        min: 0
    }, 
    ratings: {
        average: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        count: {
            type: Number,
            default: 0
        }
    },
    tags: [
        {
            type: String,
            trim: true
        }
    ],
    colors: [
        {
            type: String,
            trim: true
        }
    ],
    sizes: [   
        {
            type: String,
            trim: true
        }
    ],
    isFeatured: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["active", "inactive", "archive", "coming soon"],
        default: "active"
    }
}, {timestamps: true})

const productModel = mongoose.model("Product", productSchema);
export default productModel;
