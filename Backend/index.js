import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBConnection from "./Database/DbConnection.js";
import authRoute from "./Routes/AuthRoutes.js";
import categoryRoute from "./Routes/CategoryRoutes.js";
import productRoute from "./Routes/ProductRoutes.js";
import cartRoutes from "./Routes/CartRoutes.js";
import orderRoute from "./Routes/OrderRoutes.js";
import paymentRoute from "./Routes/PaymentRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "https://classy-shop-ecommerce-fost.vercel.app/", // frontend URL
    credentials: true               // 🔥 IMPORTANT
}));

app.use("/api/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoute);
app.use("/api/payment", paymentRoute);

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    return res.status(200).send({success: true, message: "Welcome to Ecommerce Backend"})
})

DBConnection();

app.listen(PORT, ()=>{
    console.log("backend running...");
})