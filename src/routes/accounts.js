import { Router } from "express";
import { createAccount } from "../controllers/accounts";

const router = Router();

router.post("/createaccount", createAccount);

export default router;
