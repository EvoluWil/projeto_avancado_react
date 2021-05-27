import express from "express";
import productStore from "./src/Controllers/productController.js";
import productsListIndex, {destroy} from "./src/Controllers/productListController.js";

export const routes = express.Router();

routes.post("/new", productStore)

routes.get("/", productsListIndex)
routes.delete("/remove/:id", destroy)
