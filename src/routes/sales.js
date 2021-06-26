import { Router } from 'express';
import { createSale, delSale } from '../controllers/sales';
const router = Router()

router.post('/sale', createSale)
router.delete('/sale', delSale)

export default router;