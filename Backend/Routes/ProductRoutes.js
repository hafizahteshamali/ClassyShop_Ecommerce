import express from "express";
import { CreateProductController, DeleteProductController, GetAllProductsController, GetSingleProductController, SearchProductController, UpdateProductController } from "../Controllers/ProductControllers.js";
import productUpload from "../middlewares/uploadProduct.js";
import { isAdmin, requireAuth } from "../middlewares/requireAuth.js";

const productRoute = express.Router();

productRoute.post("/add", requireAuth, isAdmin, productUpload.fields([
    {name: "images", maxCount: 5}
]), CreateProductController);
productRoute.get("/", GetAllProductsController);
productRoute.get("/search-product", SearchProductController);
productRoute.get("/:id", GetSingleProductController);
productRoute.delete("/:id", requireAuth, isAdmin, DeleteProductController);
productRoute.put("/:id", requireAuth, isAdmin, productUpload.fields([
    {name: "images", maxCount: 5}
]), UpdateProductController);

export default productRoute;