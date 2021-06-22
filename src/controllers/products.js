import Product from '../models/Product'

export function createProduct(req, res){

    const { idProduct, description, costPrice, salePrice, quantity, expireDate, dateUpdate } = req.body;

    let newProduct = Product.build({
        idProduct,
        description,
        costPrice,
        salePrice,
        quantity,
        expireDate,
        dateUpdate
    })

    Product.sync()

    newProduct.save().then( resr => {
        console.log(resr)
    }).catch( err => {
        console.log(err)
    })
}