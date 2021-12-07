import User from "../models/User";

export function createUserClient(req, res) {
  let { document, names, surnames, addres, phone } = req.body;

  if (!document || !names || !addres || !phone) {
    return res.json({
      ok: false,
      msm: "enter all fields",
    });
  }
  if (!surnames) {
    surnames = "";
  }

  const user = User.build({
    document,
    names,
    surnames,
    addres,
    phone,
    birthday: "",
    type: "D",
    role: "CLIENT",
  });

  user
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

export function findClient(req, res) {
  const document = req.query.document;
  User.findOne({ where: { document, role: "CLIENT" } })
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
