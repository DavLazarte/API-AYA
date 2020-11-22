import { Router } from "express";
const router = Router();

import { getLocalG, getLocalsG, createLocalG, updateLocalG,deleteLocalG, getLocalHigh} from "../controllers/gastronomy.controller";

router.route("/localsgas").get(getLocalsG).post(createLocalG);
router.route("/gasdest").get(getLocalHigh)

router
  .route("/localgas/:locId")
  .get(getLocalG)
  .put(updateLocalG)
  .delete(deleteLocalG);

export default router;
