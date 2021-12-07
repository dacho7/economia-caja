import { Router } from "express";
import { createUserClient, findClient } from "../controllers/users";
const router = Router();

router.post("/createclient", createUserClient);
router.get("/findclient", findClient);

export default router;
