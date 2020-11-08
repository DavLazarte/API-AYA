import { Router } from "express";
const router = Router();

import {
  getEntities,
  getEntity,
  createEntity,
  updateEntity,
  deleteEntity,
  getEntityHigh,
} from "../controllers/entity.controller";

router.route("/entities").get(getEntities).post(createEntity);
router.route("/destacadas").get(getEntityHigh);

router
  .route("/entity/:entId")
  .get(getEntity)
  .put(updateEntity)
  .delete(deleteEntity);

export default router;
