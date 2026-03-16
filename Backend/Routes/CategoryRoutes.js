import express from "express";
import { isAdmin, requireAuth } from "../middlewares/requireAuth.js";
import { CreateCategoryController, GetCategoryController } from "../Controllers/CategoryControllers.js";

const categoryRoute = express.Router();

categoryRoute.post("/create-category", requireAuth, isAdmin, CreateCategoryController);
categoryRoute.get("/get-categories", GetCategoryController);

export default categoryRoute;