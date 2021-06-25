import Invoice from "../models/Invoice";

export function createInvoice(req, res){

    const fec = new Date()
    fec.setHours(fec.getHours()-5)

    const { client, address } = req.body

    const invoice = Invoice.build({
        client,
        date: fec,
        address
    })

    //Invoice.sync()

    invoice.save().then( invoiceDB => {
        res.send({
            ok: true,
            data: invoiceDB
        })
    }).catch( err => {
        res.send({
            err
        })
    })
}