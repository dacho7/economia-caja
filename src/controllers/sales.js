import Sale from "../models/Sale";

export function createSale(req, res) {
  const { invoice, product, description, amount, subtotal, cost_price } =
    req.body;

  if (
    !invoice ||
    !product ||
    !description ||
    !amount ||
    !subtotal ||
    !cost_price
  ) {
    return res.json({
      ok: false,
      msm: "enter all fields",
    });
  }

  const sale = Sale.build({
    invoice,
    product,
    description,
    amount,
    subtotal,
    cost_price,
  });

  sale
    .save()
    .then((saleDB) => {
      res.send({
        ok: true,
        data: saleDB,
      });
    })
    .catch((err) => {
      res.send({
        err,
      });
    });
}

export function delSales(req, res) {
  const id_sale = JSON.parse(req.body.id_sales);

  Sale.destroy({ where: { id_sale } })
    .then((resDB) => {
      res.json({
        ok: true,
        message: `they were eliminated ${resDB} sales`,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
