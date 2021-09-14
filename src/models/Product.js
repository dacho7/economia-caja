import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
  "products",
  {
    idProduct: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.TEXT,
      unique: true,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    costPrice: {
      allowNull: false,
      type: DataTypes.REAL,
    },
    salePrice: {
      allowNull: false,
      type: DataTypes.REAL,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    expireDate: {
      type: DataTypes.DATE,
    },
    dateUpdate: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.TEXT,
      defaultValue: "ACTIVE",
      //ACTIVE, AVAILABLE, UNAVAILABLE, WITHOUT-REVIEW
    },
  },
  {
    timestamps: false,
  }
);

// Product.hasMany(Sale, {foreignKey: 'idSale', sourceKey: 'id'})
// Sale.belongsTo(Product, {foreignKey: 'idSale', sourceKey: 'id'})
// Product.sync()
export default Product;
