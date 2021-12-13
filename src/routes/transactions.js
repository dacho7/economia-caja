import { Router } from "express";
import { createTransaction } from "../controllers/transactions";

const router = Router();

router.post("/createtransaction", createTransaction);

export default router;
