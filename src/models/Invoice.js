import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Invoice = sequelize.define(
  "invoices",
  {
    id_invoice: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    client: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    total: {
      allowNull: false,
      type: DataTypes.REAL,
      defaultValue: 0,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.TEXT,
      defaultValue: "PAGADO",
    },
    address: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
  },
  {
    timestamps: false,
  }
);

Invoice.sync();
export default Invoice;
