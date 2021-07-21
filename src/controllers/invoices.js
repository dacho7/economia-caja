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

export function updateInvoiceTotal(req, res){

    const { total, idInvoice } = req.body;
    const dat = new Date()

    Invoice.update({ total, date: dat }, { where: { idInvoice } }).then( resDB => {
        if (resDB[0] === 0 ){
            return res.json({
                ok:false,
                message: 'not find a register by these id'
            })
        } else {
            return res.json({
                ok: true,
                message: 'total change success'
            })
        }
    }).catch( err => {
        res.status(400).json({
            ok:false,
            err
        })
    })
}