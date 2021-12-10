import User from "../models/User";

export function createUserClient(req, res) {
  let { document, names, surnames, addres, phone, email } = req.body;

  if (!document || !names || !addres || !phone || !surnames) {
    return res.json({
      ok: false,
      msm: "enter requeried fields",
    });
  }
  if (!email) {
    email = "";
  }

  const user = User.build({
    document,
    names: names.toUpperCase(),
    surnames: surnames.toUpperCase(),
    addres,
    phone,
    email,
    birthday: "",
    type: "D",
    role: "CLIENTE",
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
        ok: false,
        err,
      });
    });
}

export function findClient(req, res) {
  const document = req.query.document;
  User.findOne({ where: { document, role: "CLIENTE" } })
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
