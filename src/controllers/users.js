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
