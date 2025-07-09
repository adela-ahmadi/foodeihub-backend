// models/customer.model.js
import pool from "../db/db.js";

export async function getAllCustomers() {
  const result = await pool.query("SELECT * FROM customer");
  return result.rows;
}

export async function getCustomerById(id) {
  const result = await pool.query(
    "SELECT * FROM customer WHERE customer_id = $1",
    [id]
  );
  return result.rows[0];
}

export async function createCustomer(name, phone) {
  const result = await pool.query(
    "INSERT INTO customer (name, phone) VALUES ($1, $2) RETURNING *",
    [name, phone]
  );
  return result.rows[0];
}
export async function updateCustomer(id, name, phone) {
  const result = await pool.query(
    "UPDATE customer SET name = $1, phone = $2 WHERE customer_id = $3 RETURNING *",
    [name, phone, id]
  );
  return result.rows[0];
}

export async function deleteCustomer(id) {
  await pool.query("DELETE FROM customer WHERE customer_id = $1", [id]);
}

export async function resetCustomerTable() {
  await pool.query("DELETE FROM customer");
  await pool.query("ALTER SEQUENCE customer_customer_id_seq RESTART WITH 1");
}
