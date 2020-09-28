import { Router } from "express";
const router = Router();

import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";

router.route("/categories").get(getCategories).post(createCategory);
router
  .route("/category/:cateId")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);
export default router;
