// routes/customer.routes.js
import express from "express";
import {
  getCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  removeCustomer,
  resetCustomers,
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/", addCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", removeCustomer);
/// reset customers
router.delete("/", resetCustomers);
export default router;
