import {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrderById,
  updateOrderById,
} from "../models/order.model.js";

export async function getOrders(req, res) {
  const orders = await getAllOrders();
  res.json(orders);
}

export async function getOrder(req, res) {
  const id = req.params.id;
  const order = await getOrderById(id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: "Order not found" });
  }
}

export async function addOrder(req, res) {
  const { customer_id, restaurant_id, status, order_date } = req.body;
  if (!customer_id || !restaurant_id || !status || !order_date) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const order = await createOrder(
    customer_id,
    restaurant_id,
    status,
    order_date
  );
  res.status(201).json(order);
}

export async function removeOrder(req, res) {
  const id = req.params.id;
  await deleteOrderById(id);
  res.json({ message: "Order deleted" });
}

export async function updateOrder(req, res) {
  const id = req.params.id;
  const { customer_id, restaurant_id, status, order_date } = req.body;

  if (!customer_id || !restaurant_id || !status || !order_date) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const updated = await updateOrderById(
      id,
      customer_id,
      restaurant_id,
      status,
      order_date
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
