import { Router } from 'express';
const router = Router()
import { createProduct } from '../controllers/products'

router.post('/product', createProduct)

export default router;