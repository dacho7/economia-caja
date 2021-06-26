import { Router } from "express";
const router = Router()

import { createInvoice, updateInvoiceTotal } from "../controllers/invoices";

router.post('/invoice', createInvoice)
router.put('/invoice', updateInvoiceTotal)

export default router;