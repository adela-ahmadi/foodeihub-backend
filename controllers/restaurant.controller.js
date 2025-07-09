import RestaurantModel from "../models/restaurant.model.js";

const RestaurantController = {
  getAll: async (req, res) => {
    try {
      const restaurants = await RestaurantModel.getAll();
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ error: "Error fetching restaurants" });
    }
  },

  getById: async (req, res) => {
    try {
      const restaurant = await RestaurantModel.getById(req.params.id);
      if (!restaurant)
        return res.status(404).json({ error: "Restaurant not found" });
      res.json(restaurant);
    } catch (err) {
      res.status(500).json({ error: "Error fetching restaurant" });
    }
  },

  create: async (req, res) => {
    try {
      const newRestaurant = await RestaurantModel.create(req.body);
      res.status(201).json(newRestaurant);
    } catch (err) {
      res.status(500).json({ error: "Error creating restaurant" });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await RestaurantModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: "Error updating restaurant" });
    }
  },

  delete: async (req, res) => {
    try {
      await RestaurantModel.delete(req.params.id);
      res.status(200).json({ message: "Restaurant deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: "Error deleting restaurant" });
    }
  },
};

export default RestaurantController;
