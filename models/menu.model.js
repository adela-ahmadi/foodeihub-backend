// models/menu.model.js
import db from "../db/db.js";

export async function getAllMenus() {
  const result = await db.query("SELECT * FROM menu_item");
  return result.rows;
}

export async function getMenuById(id) {
  const result = await db.query(
    "SELECT * FROM menu_item WHERE menu_item_id = $1",
    [id]
  );
  return result.rows[0];
}

export async function createMenu(data) {
  const { name, price, restaurant_id, is_available } = data;
  const result = await db.query(
    "INSERT INTO menu_item (name, price, restaurant_id, is_available) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, price, restaurant_id, is_available]
  );
  return result.rows[0];
}

export async function updateMenu(id, data) {
  const { name, price, restaurant_id, is_available } = data;
  const result = await db.query(
    "UPDATE menu_item SET name = $1, price = $2, restaurant_id = $3, is_available = $4 WHERE menu_item_id = $5 RETURNING *",
    [name, price, restaurant_id, is_available, id]
  );
  return result.rows[0];
}

export async function deleteMenu(id) {
  const result = await db.query(
    "DELETE FROM menu_item WHERE menu_item_id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
}
