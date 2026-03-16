import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBConnection from "./Database/DbConnection.js";
import authRoute from "./Routes/AuthRoutes.js";
import categoryRoute from "./Routes/CategoryRoutes.js";
import productRoute from "./Routes/ProductRoutes.js";
import cartRoutes from "./Routes/CartRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    return res.status(200).send({success: true, message: "Welcome to Ecommerce Backend"})
})

DBConnection();

app.listen(PORT, ()=>{
    console.log("backend running...");
})