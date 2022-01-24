import { Router } from "express";
import { listAllTypes, registerType } from "../controllers/ProductType";

const router = Router();

router.post("/createtypeproduct", registerType);
router.get("/listproductstype", listAllTypes);

export default router;
