import { Router } from "express";
import { registerType } from "../controllers/ProductType";

const router = Router();

router.post("/createtypeproduct", registerType);

export default router;
