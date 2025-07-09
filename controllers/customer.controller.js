// controllers/customer.controller.js
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer as updateCustomerModel,
  deleteCustomer,
  resetCustomerTable,
} from "../models/customer.model.js";

export async function getCustomers(req, res) {
  const customers = await getAllCustomers();
  res.json(customers);
}

export async function getCustomer(req, res) {
  const id = req.params.id;
  const customer = await getCustomerById(id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
}

export async function addCustomer(req, res) {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }
  const customer = await createCustomer(name, phone);
  res.status(201).json(customer);
}
export async function updateCustomer(req, res) {
  const id = req.params.id;
  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  const updatedCustomer = await updateCustomerModel(id, name, phone);
  if (!updatedCustomer) {
    return res.status(404).json({ error: "Customer not found" });
  }

  res.json(updatedCustomer);
}

export async function removeCustomer(req, res) {
  const id = req.params.id;
  await deleteCustomer(id);
  res.json({ message: "Customer deleted" });
}
/// function for reseting all customer and thier ID
export async function resetCustomers(req, res) {
  try {
    await resetCustomerTable();
    res.json({ message: "All customers deleted and ID reset to 1" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
