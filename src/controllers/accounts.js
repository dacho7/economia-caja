import Account from "../models/Account";

export function createAccount(req, res) {
  const document = req.body.document;

  if (!document) {
    return res.send({
      ok: false,
      msm: "Enter a document",
    });
  }

  const account = Account.build({
    client: document,
    date_created: new Date(),
  });

  account
    .save()
    .then((result) => {
      res.send({
        ok: true,
        data: result,
      });
    })
    .catch((e) => {
      res.send({
        ok: false,
        err: e,
      });
    });
}

export function findAccount(req, res) {
  const document = req.query.document;

  if (!document) {
    return res.send({
      ok: false,
      msm: "Enter a document",
    });
  }

  Account.findOne({ where: { client: document } })
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
