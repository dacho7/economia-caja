import { Router } from "express";
const router = Router()

import { createInvoice } from "../controllers/invoices";


router.post('/invoice', createInvoice)

export default router;