import { Router } from "express";
const router = Router();

import {
  createInvoice,
  findInvoiceNotUse,
  updateInvoiceTotal,
} from "../controllers/invoices";

router.post("/invoice", createInvoice);
router.get("/findinvoicecero", findInvoiceNotUse);
router.put("/updateinvoice", updateInvoiceTotal);

export default router;
