import Sale from "../models/Sale";

export function createSale(req, res){

    const { invoice, product, amount, subtotal} = req.body

    const sale = Sale.build({
        invoice,
        product,
        amount,
        subtotal
    })

    sale.save().then( saleDB => {
        res.send({
            ok: true,
            data: saleDB
        })
    }).catch( err => {
        res.send({
            err
        })
    })
}

export function delSale(req, res){

    const idSale = req.body.idSale;

    Sale.destroy({where: {idSale}}).then( resDB => {
        res.json(resDB)
    }).catch( err => {
        console.log(err)
    })
}