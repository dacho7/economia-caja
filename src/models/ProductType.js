import { DataTypes } from "sequelize/types";
import { sequelize } from "../database/database";

const ProductType = sequelize.define("product_types", {
  id_type: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
});

ProductType.sync();

export default ProductType;
