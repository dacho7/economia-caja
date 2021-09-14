import { where } from "sequelize";
import Product from "../models/Product";
import { generateEAN } from "./functions";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export function createProduct(req, res) {
  let { description, costPrice, salePrice, quantity, expireDate, type } =
    req.body;

  if (
    !description ||
    !costPrice ||
    !salePrice ||
    !quantity ||
    !expireDate ||
    !type
  ) {
    return res.send({
      ok: false,
      err: "Enter all fields",
    });
  }
  const fec = new Date();
  fec.setHours(fec.getHours() - 5);

  const code = generateEAN();

  let newProduct = Product.build({
    code,
    description,
    costPrice,
    salePrice,
    quantity,
    expireDate,
    dateUpdate: fec,
    type,
  });

  //Product.sync()

  newProduct
    .save()
    .then((productDB) => {
      res.send({
        ok: true,
        data: productDB,
      });
    })
    .catch((err) => {
      res.send({
        err,
      });
    });
}

export function showAllProducts(req, res) {
  Product.findAll()
    .then((productsDB) => {
      res.json({
        ok: true,
        data: productsDB,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        ok: false,
        err,
      });
    });
}

export function findByDescription(req, res) {
  let description = req.query.description;
  console.log(description);
  description = "%" + description + "%";
  Product.findAll({ where: { description: { [Op.like]: description } } })
    .then((resultDB) => {
      if (resultDB.length === 0) {
        return res.json({
          ok: false,
          message: "No hay resultados",
        });
      }
      res.json({
        ok: true,
        data: resultDB,
      });
    })
    .catch((err) => {
      console.log("hola");
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function findByCode(req, res) {
  let code = req.query.code;
  Product.findOne({ where: { code } })
    .then((resultDB) => {
      if (!resultDB) {
        return res.json({
          ok: false,
          message: "No se encuentra un producto con ese Codigo",
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

export function findByState(req, res) {
  let state = req.query.state;
  Product.findAll({ where: { state } })
    .then((productsDB) => {
      if (!productsDB) {
        return res.json({
          ok: false,
          message: "don't results",
        });
      }
      res.json({
        ok: true,
        data: productsDB,
      });
    })
    .catch((err) => console.log(err));
}

export function updateProductDescription(req, res) {
  const { description, idProduct } = req.body;
  Product.update({ description }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      } else {
        return res.json({
          ok: true,
          message: "update success register",
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

export function updateProductCode(req, res) {
  const { code, idProduct } = req.body;
  Product.update({ code }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductCostPrice(req, res) {
  const { costPrice, idProduct } = req.body;
  Product.update({ costPrice }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductSalePrice(req, res) {
  const { salePrice, idProduct } = req.body;
  Product.update({ salePrice }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductQuantity(req, res) {
  const { quantity, idProduct } = req.body;
  Product.update({ quantity }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductExpireDate(req, res) {
  const { expireDate, idProduct } = req.body;
  Product.update({ expireDate }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductDateUpdate(req, res) {
  const { dateUpdate, idProduct } = req.body;
  Product.update({ dateUpdate }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductType(req, res) {
  const { type, idProduct } = req.body;
  Product.update({ type }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProductState(req, res) {
  const { state, idProduct } = req.body;
  Product.update({ state }, { where: { idProduct } })
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}

export function updateProduct(req, res) {
  const { idProduct, costPrice, salePrice, quantity, expireDate, state } =
    req.body;
  Product.update(
    {
      costPrice,
      salePrice,
      quantity,
      expireDate,
      dateUpdate: new Date(),
      state,
    },
    { where: { idProduct } }
  )
    .then((resDB) => {
      if (resDB[0] === 0) {
        return res.json({
          ok: false,
          message: "not find a register by these id",
        });
      }
      return res.json({
        ok: true,
        message: "update success register",
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}
