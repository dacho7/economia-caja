import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

// import Product from './Product'
// import Invoice from './Invoice';

const Sale = sequelize.define(
  "sales",
  {
    idSale: {
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
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    amount: {
      allowNull: false,
      type: DataTypes.REAL,
    },
    subtotal: {
      allowNull: false,
      type: DataTypes.REAL,
    },
  },
  {
    timestamps: false,
  }
);

//Sale.hasMany(Product, {foreignKey: 'idProduct', sourceKey: 'product'})
//Sale.hasMany(Invoice, {foreignKey: 'idInvoice', sourceKey: 'invoice'})

//se aniadae una clave  productid a sales
//Sale.hasMany(Product)
//se aniada una clave productid a la tabla
//Product.belongsTo(Sale)

//Sale.sync()
export default Sale;
