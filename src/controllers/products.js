import Product from "../models/Product";
import { generateEAN, round100 } from "../functions/functions";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

export function createProduct(req, res) {
  let { description, code, total_price, quantity, type, expire_date } =
    req.body;

  if (!description || !total_price || !quantity || !type || !expire_date) {
    return res.send({
      ok: false,
      err: "Enter all fields",
    });
  }

  description = description.toLowerCase().trim();

  if (!code) {
    code = generateEAN();
  }

  const cost_price = Number(total_price) / Number(quantity);
  const sale_price = round100(Number(cost_price) + Number(cost_price) * 0.14);

  let newProduct = Product.build({
    code,
    description,
    cost_price,
    sale_price,
    quantity,
    expire_date,
    date_price_update: new Date(),
    date_arrive: new Date(),
    type,
  });

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

export function findById(req, res) {
  let id = req.query.id;
  Product.findOne({ where: { id_product: id } })
    .then((resultDB) => {
      if (!resultDB) {
        return res.json({
          ok: false,
          message: "No se encuentra un producto con esa Id",
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

export function findByDescription(req, res) {
  let description = req.query.description;
  if (!description) {
    return res.json({
      ok: false,
      message: "La descripcion no puede ser vacia",
    });
  }
  description = description.toLowerCase();
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
      return res.json({
        ok: true,
        data: productsDB,
      });
    })
    .catch((err) => {
      return res.json({
        ok: true,
        err,
      });
    });
}

export function findByDateUpdate(req, res) {
  let date_price_update = req.query.date_price_update;
  if (!date_price_update) {
    return res.json({
      ok: false,
      message: "input a validate date",
    });
  }
  // date_price_update = new Date(date_price_update);
  date_price_update = date_price_update + "%";
  Product.findAll({ where: { date_price_update } })
    .then((result) => {
      return res.json({
        ok: false,
        message: result,
      });
    })
    .catch((err) => {
      return res.json({
        ok: true,
        err,
      });
    });
}

export function updateProductDescription(req, res) {
  const { description, id_product } = req.body;
  Product.update({ description }, { where: { id_product } })
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
  const { code, id_product } = req.body;
  Product.update({ code }, { where: { id_product } })
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
  const { cost_price, id_product } = req.body;
  Product.update({ cost_price }, { where: { id_product } })
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
  const { sale_price, id_product } = req.body;
  Product.update(
    { sale_price, date_price_update: new Date() },
    { where: { id_product } }
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

export function updateProductQuantity(req, res) {
  let { quantity, id_product } = req.body;

  if (!id_product || quantity == null) {
    return res.json({
      ok: false,
      msm: "enter a quantity and id_product",
    });
  }

  quantity = parseFloat(quantity);

  Product.update({ quantity }, { where: { id_product } })
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
  const { expire_date, id_product } = req.body;
  Product.update({ expire_date }, { where: { id_product } })
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
  const { date_price_update, id_product } = req.body;
  Product.update({ date_price_update }, { where: { id_product } })
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
  const { type, id_product } = req.body;
  Product.update({ type }, { where: { id_product } })
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
  const { state, id_product } = req.body;
  Product.update({ state }, { where: { id_product } })
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

export function updateProductAll(req, res) {
  let {
    id_product,
    description,
    cost_price,
    sale_price,
    quantity,
    expire_date,
    date_price_update,
    date_arrive,
    type,
    state,
  } = req.body;

  description = description.trim();

  Product.findOne({ where: { description } })
    .then((resDB) => {
      if (resDB) {
        return res.json({
          ok: false,
          msm: "exist a product with these description",
        });
      } else {
        if (
          !id_product ||
          !description ||
          !cost_price ||
          !sale_price ||
          !quantity ||
          !expire_date ||
          !date_price_update ||
          !date_arrive ||
          !type ||
          !state
        ) {
          return res.send({
            ok: false,
            message: "Enter all fields",
          });
        }

        Product.update(
          {
            description,
            cost_price,
            sale_price,
            quantity,
            expire_date,
            date_price_update,
            date_arrive,
            type,
            state,
          },
          { where: { id_product } }
        )
          .then((resDB) => {
            console.log(resDB);
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
    })
    .catch((e) => console.log(e));
}
