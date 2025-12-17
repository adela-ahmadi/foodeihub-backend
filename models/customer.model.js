// models/customer.model.js
import pool from "../db/db.js";

/**
 * Get all customers
 */
export async function getAllCustomers() {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM customer ORDER BY customer_id DESC"
    );
    return rows;
  } catch (error) {
    throw new Error("Failed to fetch customers");
  }
}

/**
 * Get customer by ID
 */
export async function getCustomerById(id) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM customer WHERE customer_id = $1",
      [id]
    );
    return rows[0] || null;
  } catch (error) {
    throw new Error("Failed to fetch customer");
  }
}

/**
 * Create new customer
 */
export async function createCustomer(name, phone) {
  try {
    const { rows } = await pool.query(
      `INSERT INTO customer (name, phone)
       VALUES ($1, $2)
       RETURNING *`,
      [name, phone]
    );
    return rows[0];
  } catch (error) {
    throw new Error("Failed to create customer");
  }
}

/**
 * Update customer by ID
 */
export async function updateCustomer(id, name, phone) {
  try {
    const { rows } = await pool.query(
      `UPDATE customer
       SET name = $1,
           phone = $2
       WHERE customer_id = $3
       RETURNING *`,
      [name, phone, id]
    );
    return rows[0] || null;
  } catch (error) {
    throw new Error("Failed to update customer");
  }
}

/**
 * Delete customer by ID
 */
export async function deleteCustomer(id) {
  try {
    const result = await pool.query(
      "DELETE FROM customer WHERE customer_id = $1",
      [id]
    );
    return result.rowCount > 0;
  } catch (error) {
    throw new Error("Failed to delete customer");
  }
}

/**
 * Reset customer table (development only)
 */
export async function resetCustomerTable() {
  try {
    await pool.query("TRUNCATE TABLE customer RESTART IDENTITY");
    return true;
  } catch (error) {
    throw new Error("Failed to reset customer table");
  }
}
