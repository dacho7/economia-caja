import ProductType from "../models/ProductType";

export function registerType(req, res) {
  let description = req.body.description;

  if (!description) {
    return res.json({
      ok: false,
      msm: "enter a description",
    });
  }

  const product = ProductType.build({
    description,
  });

  product
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
