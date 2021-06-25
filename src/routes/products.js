import { Router } from 'express';
const router = Router()
import { createProduct, 
    findByDescription, 
    showAllProducts, 
    updateProductCode, 
    updateProductCostPrice, 
    updateProductDateUpdate, 
    updateProductDescription, 
    updateProductExpireDate, 
    updateProductQuantity, 
    updateProductSalePrice,
    updateProductState,
    updateProductType
} from '../controllers/products'

router.post('/product', createProduct)
router.get('/products', showAllProducts)
router.put('/productupdatedescription', updateProductDescription)
router.put('/productupdatecode', updateProductCode)
router.put('/productupdatecostprice', updateProductCostPrice)
router.put('/productupdatesaleprice', updateProductSalePrice)
router.put('/productupdatequantity', updateProductQuantity)
router.put('/productupdateexpiredate', updateProductExpireDate)
router.put('/productupdatedateupdate', updateProductDateUpdate)
router.put('/productupdatetype', updateProductType)
router.put('/productupdatestate', updateProductState)
router.get('/product', findByDescription)

export default router;