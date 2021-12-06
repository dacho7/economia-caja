import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";
import Sale from "./Sale";

const Invoice = sequelize.define("invoices", {
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
    defaultValue: "PAGADO", //PAGADO,FIADO,CANCELADO,TARGETA,NEQUI,DAVIPLATA,BANCOLOMBIA...
  },
  address: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
});

// Invoice.hasMany(Sale, {
//   foreignKey: "id_invoice",
// });

// Sale.belongsTo(Invoice);

Invoice.sync();
export default Invoice;
