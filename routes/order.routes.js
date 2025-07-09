import express from "express";
import {
  getOrders,
  getOrder,
  addOrder,
  removeOrder,
  updateOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

// Get all orders
router.get("/", getOrders);

// Get a specific order by ID
router.get("/:id", getOrder);

// Create a new order
router.post("/", addOrder);

// Update an existing order
router.put("/:id", updateOrder);

// Delete an order
router.delete("/:id", removeOrder);

export default router;
