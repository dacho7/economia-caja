import { Router } from "express";
import { createSale, delSales } from "../controllers/sales";
const router = Router();

router.post("/sale", createSale);
router.delete("/sales", delSales);

export default router;
