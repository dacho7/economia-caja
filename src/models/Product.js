import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
  "products",
  {
    id_product: {
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
      type: DataTypes.CITEXT,
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
    expire_date: {
      type: DataTypes.DATE,
    },
    date_update: {
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
  },
  {
    timestamps: false,
  }
);

// Product.hasMany(Sale, {foreignKey: 'id_sale', sourceKey: 'id'})
// Sale.belongsTo(Product, {foreignKey: 'id_sale', sourceKey: 'id'})
// Product.sync()
export default Product;
