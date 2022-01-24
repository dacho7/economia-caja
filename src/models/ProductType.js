import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

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

ProductType.sync()
  .then(() => console.log("ok ProductType"))
  .catch((e) => console.log(e));

export default ProductType;
