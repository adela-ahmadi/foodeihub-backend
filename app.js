import express from "express";
import dotenv from "dotenv";
import restaurantRoutes from "./routes/restaurant.routes.js";
import menuItemRoutes from "./routes/menu.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import orderRoutes from "./routes/order.routes.js";
import orderItemRoutes from "./routes/orderitem.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
//Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu_items", menuItemRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order_items", orderItemRoutes);
export default app;
