import { Router } from 'express';
const router = Router()
import { createProduct, 
    findByDescription, 
    showAllProducts, 
    updateProductCode, 
    updateProductDescription 
} from '../controllers/products'

router.post('/product', createProduct)
router.get('/products', showAllProducts)
router.put('/productupdatedescription', updateProductDescription)
router.put('/productupdatecode', updateProductCode)
router.get('/product', findByDescription)

export default router;