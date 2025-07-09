import {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from "../models/orderitem.model.js";

export async function getOrderItems(req, res) {
  const items = await getAllOrderItems();
  res.json(items);
}

export async function getOrderItem(req, res) {
  const id = req.params.id;
  const item = await getOrderItemById(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Order item not found" });
  }
}

export async function addOrderItem(req, res) {
  const { order_id, menu_item_id, quantity } = req.body;
  if (!order_id || !menu_item_id || !quantity) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const item = await createOrderItem(order_id, menu_item_id, quantity);
  res.status(201).json(item);
}

export async function updateOrderItemById(req, res) {
  const id = req.params.id;
  const { order_id, menu_item_id, quantity } = req.body;
  const updated = await updateOrderItem(id, order_id, menu_item_id, quantity);
  res.json(updated);
}

export async function removeOrderItem(req, res) {
  const id = req.params.id;
  await deleteOrderItem(id);
  res.json({ message: "Order item deleted" });
}
