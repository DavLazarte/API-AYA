import { Router } from "express";
const router = Router();

import {
  getEntities,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
  getEntityHigh,
  getSalud,
  getAllServices,
  getAllGastronomy
} from "../controllers/entity.controller";

router.route("/entities").get(getEntities).post(createEntity);
router.route("/destacadas").get(getEntityHigh);
router.route("/salud").get(getSalud);
router.route("/services").get(getAllServices);
router.route("/gastronomy").get(getAllGastronomy);

router
  .route("/entity/:entId")
  .get(getEntity)
  .put(updateEntity)
  .delete(deleteEntity);

export default router;
