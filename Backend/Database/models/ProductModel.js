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
        lowercase: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: [true, "Product price must be positive"],
        min: 0
    },
    discountedPrice: {
        type: Number,
        required: [true, "Product discounted price must be positive"],
        min: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    images: [
        {
            url: {type: String, required: true},
            public_id: {type: String, required: true}
        },
    ],
    ratings: {
        average: {
            type: Number,
            required: true,
            min: 0,
            max: 5
        },
        count: {
            type: Number,
            default: 0
        }
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    tags: [
        {
            type: String,
            trim: true
        }
    ],
    status: {
        type: String,
        enum: ["active", "inactive", "archived"],
        default: "active"
    }
}, {timestamps: true})

const productModel = mongoose.model("Products", productSchema);
export default productModel;