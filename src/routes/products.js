import { Router } from "express";
const router = Router();

import {
  createProduct,
  findByCode,
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
  updateProductType,
  updateProductAll,
  findByState,
  findById,
  findByDateUpdate,
} from "../controllers/products";

router.post("/product", createProduct);
router.get("/product", findByCode);
router.get("/findbystate", findByState);
router.get("/findbyid", findById);
router.get("/findbydateupdate", findByDateUpdate);
router.get("/products", showAllProducts);
router.get("/productdescription", findByDescription);
router.put("/productupdatedescription", updateProductDescription);
router.put("/productupdatecode", updateProductCode);
router.put("/productupdatecostprice", updateProductCostPrice);
router.put("/productupdatesaleprice", updateProductSalePrice);
router.put("/productupdatequantity", updateProductQuantity);
router.put("/productupdateexpiredate", updateProductExpireDate);
router.put("/productupdatedateupdate", updateProductDateUpdate);
router.put("/productupdatetype", updateProductType);
router.put("/productupdatestate", updateProductState);
router.put("/productupdate", updateProductAll);

export default router;
