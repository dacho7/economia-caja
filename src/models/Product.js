import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Product = sequelize.define("products", {
  id_product: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.TEXT,
    unique: true,
    allowNull: false,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
    unique: true,
  },
  cost_price: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  sale_price: {
    allowNull: false,
    type: DataTypes.REAL,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  // amount: {
  //   allowNull: false,
  //   type: DataTypes.NUMBER,
  // },
  expire_date: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  date_price_update: {
    //when update product price
    type: DataTypes.DATE,
  },
  date_arrive: {
    //only arrive product
    type: DataTypes.DATE,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  state: {
    type: DataTypes.TEXT,
    defaultValue: "WITHOUT-REVIEW",
    //ACTIVE, UNAVAILABLE, WITHOUT-REVIEW
  },
});

// Product.hasMany(Sale, {foreignKey: 'id_sale', sourceKey: 'id'})
// Sale.belongsTo(Product, {foreignKey: 'id_sale', sourceKey: 'id'})
Product.sync()
  .then(() => console.log("ok Product"))
  .catch((e) => console.log(e));
export default Product;
