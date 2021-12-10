import { Router } from "express";
import { createAccount, findAccount } from "../controllers/accounts";

const router = Router();

router.post("/createaccount", createAccount);
router.get("/findaccount", findAccount);

export default router;
