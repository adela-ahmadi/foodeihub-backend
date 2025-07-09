import db from "../db/db.js";

const RestaurantModel = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM restaurant");
    return result.rows;
  },

  getById: async (id) => {
    const result = await db.query(
      "SELECT * FROM restaurant WHERE restaurant_id = $1",
      [id]
    );
    return result.rows[0];
  },

  create: async ({ name, address, phone }) => {
    const result = await db.query(
      "INSERT INTO restaurant (name, address, phone) VALUES ($1, $2, $3) RETURNING *",
      [name, address, phone]
    );
    return result.rows[0];
  },

  update: async (id, { name, address, phone }) => {
    const result = await db.query(
      "UPDATE restaurant SET name = $1, address = $2, phone = $3 WHERE restaurant_id = $4 RETURNING *",
      [name, address, phone, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await db.query("DELETE FROM restaurant WHERE restaurant_id = $1", [id]);
  },
};

export default RestaurantModel;
