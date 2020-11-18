import { Router } from "express";
const router = Router();

import {
  getService,
  getServices,
  createService,
  updateService,
  deleteService,
} from "../controllers/service.controller";

router.route("/services").get(getServices).post(createService);

router
  .route("/service/:servId")
  .get(getService)
  .put(updateService)
  .delete(deleteService);

export default router;
