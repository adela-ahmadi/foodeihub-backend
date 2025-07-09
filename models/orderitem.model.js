import pool from "../db/db.js";

export async function getAllOrderItems() {
  const result = await pool.query("SELECT * FROM order_item");
  return result.rows;
}

export async function getOrderItemById(id) {
  const result = await pool.query(
    "SELECT * FROM order_item WHERE order_item_id = $1",
    [id]
  );
  return result.rows[0];
}

export async function createOrderItem(order_id, menu_item_id, quantity) {
  const result = await pool.query(
    "INSERT INTO order_item (order_id, menu_item_id, quantity) VALUES ($1, $2, $3) RETURNING *",
    [order_id, menu_item_id, quantity]
  );
  return result.rows[0];
}

export async function updateOrderItem(id, order_id, menu_item_id, quantity) {
  const result = await pool.query(
    "UPDATE order_item SET order_id = $1, menu_item_id = $2, quantity = $3 WHERE order_item_id = $4 RETURNING *",
    [order_id, menu_item_id, quantity, id]
  );
  return result.rows[0];
}

export async function deleteOrderItem(id) {
  await pool.query("DELETE FROM order_item WHERE order_item_id = $1", [id]);
}
