import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Account = sequelize.define("accounts", {
  id_account: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  client: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  balance: {
    type: DataTypes.REAL,
  },
  date_created: {
    type: DataTypes.DATE,
  },
  state: {
    type: DataTypes.TEXT, //state (ACTIVE, INACTIVE, SUSPENDED)
  },
});

Account.sync();
export default Account;
