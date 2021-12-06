import { Router } from "express";
import { createUserClient } from "../controllers/users";
const router = Router();

router.post("/createclient", createUserClient);

export default router;
