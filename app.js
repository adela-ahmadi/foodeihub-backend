import express from "express";
import restaurantRoutes from "./routes/restaurant.routes.js";
import menuItemRoutes from "./routes/menu.routes.js";
import customerRoutes from "./routes/customer.routes.js";
import orderRoutes from "./routes/order.routes.js";
import orderItemRoutes from "./routes/orderitem.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";

const app = express();
app.use(express.json());
//Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menu_items", menuItemRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order_items", orderItemRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
