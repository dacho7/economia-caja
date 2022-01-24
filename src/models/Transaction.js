import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Transaction = sequelize.define("transactions", {
  id_tra: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  account: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  type: {
    type: DataTypes.TEXT, //PAGO, DEUDA
  },
  description: {
    type: DataTypes.TEXT,
  },
  mount: {
    type: DataTypes.REAL, //state (ACTIVE, INACTIVE, SUSPENDED)
  },
  date_created: {
    type: DataTypes.DATE,
  },
});

Transaction.sync()
  .then(() => console.log("ok Transaction"))
  .catch((e) => console.log(e));
export default Transaction;
