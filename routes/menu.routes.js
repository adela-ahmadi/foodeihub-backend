// routes/menu.routes.js
import express from "express";
import {
  getMenus,
  getMenu,
  postMenu,
  putMenu,
  removeMenu,
} from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getMenus);
router.get("/:id", getMenu);
router.post("/", postMenu);
router.put("/:id", putMenu);
router.delete("/:id", removeMenu);

export default router;
