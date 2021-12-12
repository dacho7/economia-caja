import Account from "../models/Account";
import Transaction from "../models/Transaction";

export function createTransaction(req, res) {
  let { account, type, description, mount } = req.body;

  if (!account || !type || !description || !mount) {
    return res.send({
      ok: false,
      msm: "Enter all fields",
    });
  }

  mount = parseFloat(mount);

  if (typeof mount != "number" || mount < 100) {
    return res.send({
      ok: false,
      msm: "Enter a valid value",
    });
  }

  Account.findOne({ where: { client: account } })
    .then((resultDB) => {
      if (!resultDB) {
        return res.json({
          ok: false,
          message: "These account don't exist",
        });
      }
      let newMount = 0;
      if (type === "PAY" || type === "pay") {
        type = "PAY";
        newMount = resultDB.dataValues.balance - mount;
      } else if (type === "DEB" || type === "deb") {
        type = "DEB";
        newMount = resultDB.dataValues.balance + mount;
      } else {
        return res.json({
          ok: false,
          msm: `enter a valid type transaction DEB or PAY`,
        });
      }
      if (newMount < 0) {
        return res.json({
          ok: false,
          msm: `Don't less 0 in account, your accoun owe ${resultDB.dataValues.balance}`,
        });
      }
      Account.update({ balance: newMount }, { where: { client: account } })
        .then((resDB) => {
          if (resDB[0] !== 0) {
            Transaction.create({
              account,
              type,
              description,
              mount,
            })
              .then((transactionDB) => {
                return res.json({
                  ok: true,
                  data: transactionDB,
                });
              })
              .catch((er) => {
                return res.json({
                  ok: false,
                  msm: er,
                });
              });
          } else {
            return res.send({
              ok: false,
              message: "not find a register by these id",
            });
          }
        })
        .catch((err) => {
          res.status(400).json({
            ok: false,
            err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        err,
      });
    });
}
