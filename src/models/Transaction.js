import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Transaction = sequelize.define("transactions", {
  id_transaction: {
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
    type: DataTypes.REAL, //PAGO, DEUDA
  },
  description: {
    type: DataTypes.DATE,
  },
  mount: {
    type: DataTypes.REAL, //state (ACTIVE, INACTIVE, SUSPENDED)
  },
});

Transaction.sync();
export default Transaction;
