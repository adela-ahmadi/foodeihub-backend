// controllers/menu.controller.js
import {
  getAllMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
} from "../models/menu.model.js";

export async function getMenus(req, res) {
  const menus = await getAllMenus();
  res.json(menus);
}

export async function getMenu(req, res) {
  const id = req.params.id;
  const menu = await getMenuById(id);
  if (!menu) return res.status(404).json({ message: "Menu not found" });
  res.json(menu);
}

export async function postMenu(req, res) {
  const newMenu = await createMenu(req.body);
  res.status(201).json(newMenu);
}

export async function putMenu(req, res) {
  const id = req.params.id;
  const updated = await updateMenu(id, req.body);
  if (!updated) return res.status(404).json({ message: "Menu not found" });
  res.json(updated);
}

export async function removeMenu(req, res) {
  const id = req.params.id;
  const deleted = await deleteMenu(id);
  if (!deleted) return res.status(404).json({ message: "Menu not found" });
  res.json({ message: "Menu deleted" });
}
