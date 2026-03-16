import cartModel from "../Database/models/CartModel.js";
import productModel from "../Database/models/ProductModel.js";

export const CreateCartController = async (req, res) => {
    try {
        const userId = req.user._id;
        const { productId, quantity } = req.body;

        const qty = quantity && quantity > 0 ? quantity : 1;

        const product = await productModel.findById(productId);
        if (!product || product.status !== "active") {
            return res.status(404).send({ success: false, message: "product not found!" });
        }

        if (product.stock < qty) {
            return res.status(400).send({ success: false, message: "No enough stock available" });
        }

        let cart = await cartModel.findOne({ user: userId });
        if (!cart) {
            cart = await cartModel.create({
                user: userId,
                items: [{ product: productId, quantity: qty }]
            })
        } else {
            const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
            if (itemIndex > -1) {
                const newQty = cart.items[itemIndex].quantity + qty;
                if (newQty > product.stock) {
                    return res.status(200).send({ success: true, message: "Exceed stock available" });
                } else {
                    cart.items[itemIndex].quantity = newQty;
                }
            } else {
                cart.items.push({
                    product: productId,
                    quantity: qty
                })
            }
            await cart.save();
        }
        return res.status(200).send({ success: true, message: "product add in cart", cart });

    } catch (error) {
        return res.status(500).send({ success: false, message: error.message });
    }
}

export const GetCartController = async (req, res)=>{
    try {
        const userId = req.user._id;
        const cart = await cartModel.findOne({user: userId}).populate("items.product");
        if(!cart){
            return res.status(200).send({success: true, cart: [], subTotal: 0, totalItems: 0, totalQuanity: 0});
        }
        let subTotal = 0;
        let totalQuanity = 0;
        cart.items.forEach((item)=>{
            item.product.discountedPrice && item.product.discountedPrice > 1 ? item.product.discountedPrice : item.product.price;

            subTotal += ((item.product.discountedPrice ? item.product.discountedPrice : item.product.price) * item.quantity);
            totalQuanity += item.quantity;
        })
        const totalItems = cart.items.length;
        return res.status(200).send({success: true, cart: cart.items, subTotal, totalItems, totalQuanity});
    } catch (error) {
        return res.status(500).send({success: false, message: error.message});   
    }
}

export const UpdateCartController = async (req, res)=>{
    try {
        const userId = req.user._id;
        const {productId, quantity} = req.body;
        if(quantity > 1){
            return res.status(400).send({success: false, message: "product must be atleast 1"});
        }
        const cart = await cartModel.findOne({user: userId});
        if(!cart){
            return res.status(404).send({success: false, message: "cart not found!"});
        }
        const product = await productModel.findById(productId);
        if(!product){
            return res.status(404).send({success: false, message: "product not found!"});
        }
        if(product.stock < quantity){
            return res.status(400).send({success: false, message: "Exceed available stocks"});
        }
        const items = cart.items.map((item)=>item.product.toString() === productId);
        if(!items){
            return res.status(404).send({success: false, message: "cart is empty"});
        }
        items.quantity = quantity;
        await cart.save();
        return res.status(200).send({success: false, message: "cart updated successfully", cart});
    } catch (error) {
        return res.status(500).send({success: false, message: error.message});
    }
}

export const DeleteCartController = async (req, res)=>{
    try {
        const userId = req.user._id;
        const {productId} = req.body;

        const cart = await cartModel.findOne({user: userId});
        if(!cart){
            return res.status(404).send({success: false, message: "cart not found!"});
        }
        cart.items.filter((item)=>item.product.toString() !== productId);
        await cart.save();
        return res.status(200).send({success: 200, message: "product deleted successfully"});
    } catch (error) {
        
    }
}

export const ClearController = async (req, res)=>{
    try {
        const userId = req.user._id;
        await cartModel.findOneAndUpdate({user: userId}, {items: []});
        return res.status(200).send({success: true, message: "cart cleared"});
    } catch (error) {
        return res.status(500).send({success: false, message: error.message});
    }
}