import express from "express";
import {
  getOrderItems,
  getOrderItem,
  addOrderItem,
  updateOrderItemById,
  removeOrderItem,
} from "../controllers/orderitem.controller.js";

const router = express.Router();

router.get("/", getOrderItems);
router.get("/:id", getOrderItem);
router.post("/", addOrderItem);
router.put("/:id", updateOrderItemById);
router.delete("/:id", removeOrderItem);

export default router;
