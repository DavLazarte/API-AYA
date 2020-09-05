import { Router } from 'express'
const router = Router();

import { createFarmacia, getFarmacias, getFarmacia, updateFarmacia, deleteFarmacia } from '../controllers/farmacia.controller'

router.route('/farmacias')
    .get(getFarmacias)
    .post(createFarmacia);


router.route('/farmacia/:farmId')
    .get(getFarmacia)
    .put(updateFarmacia)
    .delete(deleteFarmacia);

export default router