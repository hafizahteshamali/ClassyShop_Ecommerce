import express from "express";
import { requireAuth } from "../middlewares/requireAuth.js";
import { ClearController, CreateCartController, DeleteCartController, GetCartController, UpdateCartController } from "../Controllers/CartControllers.js";

const cartRoutes = express.Router();

cartRoutes.post("/add", requireAuth, CreateCartController);
cartRoutes.get("/", requireAuth, GetCartController);
cartRoutes.put("/", requireAuth, UpdateCartController);
cartRoutes.delete("/remove/:id", requireAuth, DeleteCartController);
cartRoutes.delete("/clear", requireAuth, ClearController);


export default cartRoutes;