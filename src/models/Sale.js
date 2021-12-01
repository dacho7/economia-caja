import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

// import Product from './Product'
// import Invoice from './Invoice';

const Sale = sequelize.define("sales", {
  id_sale: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  invoice: {
    allowNull: false,
    type: DataTypes.BIGINT,
  },
  product: {
    type: DataTypes.BIGINT,
  },
  amount: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  cost_price: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  subtotal: {
    allowNull: false,
    type: DataTypes.REAL,
  },
});

//Sale.hasMany(Product, {foreignKey: 'id_product', sourceKey: 'product'})
//Sale.hasMany(Invoice, {foreignKey: 'id_invoice', sourceKey: 'invoice'})

//se aniadae una clave  productid a sales
//Sale.hasMany(Product)
//se aniada una clave productid a la tabla
//Product.belongsTo(Sale)

Sale.sync();
export default Sale;
