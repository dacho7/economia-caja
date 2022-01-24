import Product from "../models/Product";
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

export function listAllTypes(req, res) {
  ProductType.findAll()
    .then((productsDB) => {
      res.json({
        ok: true,
        data: productsDB,
      });
    })
    .catch((err) => {
      res.json({
        ok: false,
        err,
      });
    });
}
