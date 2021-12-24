import Invoice from "../models/Invoice";

export function createInvoice(req, res) {
  const invoice = Invoice.build({ date: new Date() });

  invoice
    .save()
    .then((invoiceDB) => {
      res.send({
        ok: true,
        data: invoiceDB,
      });
    })
    .catch((err) => {
      res.send({
        err,
      });
    });
}

export function findInvoiceNotUse(req, res) {
  Invoice.findOne({ where: { total: 0 } })
    .then((resultDB) => {
      if (!resultDB) {
        return res.json({
          ok: false,
          message: "Don't results",
        });
      }
      res.json({
        ok: true,
        data: resultDB,
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateInvoiceTotal(req, res) {
  let { total, id_invoice, client, name_client, type, address } = req.body;

  if (!total || !id_invoice || !client || !type) {
    return res.json({
      ok: false,
      msm: "Enter all fields",
    });
  }

  if (!name_client) {
    name_client = "";
  }
  if (!address) {
    address = "";
  }

  Invoice.update(
    {
      total,
      date: new Date(),
      client,
      name_client: name_client.trim(),
      type,
      address,
    },
    { where: { id_invoice } }
  )
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      } else {
        return res.json({
          ok: true,
          message: "total change success",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}
