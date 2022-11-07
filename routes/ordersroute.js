import express from "express";
import { createOrders, deleteOrders, getAllOrders, getSingleOrder, updateOrders } from "../controllers/ordercontroller.js";
const route = express.Router();

// Route GET "/orders"
route.get("/", getAllOrders);
// Route GET "/orders/:id"
route.get("/:id", getSingleOrder)
// Route POST "/orders"
route.post("/", createOrders);

// Route PATCH "/orders:id"
route.patch("/:id", updateOrders);

//Route DELETE "/orders/:id"
route.delete("/:id,", deleteOrders);

export default route