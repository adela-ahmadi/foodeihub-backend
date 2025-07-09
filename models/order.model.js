import pool from "../db/db.js";

export async function getAllOrders() {
  const result = await pool.query("SELECT * FROM food_order");
  return result.rows;
}

export async function getOrderById(id) {
  const result = await pool.query(
    "SELECT * FROM food_order WHERE order_id = $1",
    [id]
  );
  return result.rows[0];
}

export async function createOrder(
  customer_id,
  restaurant_id,
  status,
  order_date
) {
  const result = await pool.query(
    "INSERT INTO food_order (customer_id, restaurant_id, status, order_date) VALUES ($1, $2, $3, $4) RETURNING *",
    [customer_id, restaurant_id, status, order_date]
  );
  return result.rows[0];
}

export async function deleteOrderById(id) {
  await pool.query("DELETE FROM food_order WHERE order_id = $1", [id]);
}

export async function updateOrderById(
  id,
  customer_id,
  restaurant_id,
  status,
  order_date
) {
  const result = await pool.query(
    `UPDATE food_order 
     SET customer_id = $1, restaurant_id = $2, status = $3, order_date = $4 
     WHERE order_id = $5 RETURNING *`,
    [customer_id, restaurant_id, status, order_date, id]
  );
  return result.rows[0];
}
