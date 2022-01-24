import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const Account = sequelize.define("accounts", {
  client: {
    allowNull: false,
    type: DataTypes.TEXT,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.REAL,
    defaultValue: 0,
  },
  date_created: {
    type: DataTypes.DATE,
  },
  state: {
    type: DataTypes.TEXT, //state (ACTIVE, INACTIVE, SUSPENDED)
    defaultValue: "ACTIVA",
  },
});

Account.sync()
  .then(() => console.log("ok Account"))
  .catch((e) => console.log(e));
export default Account;
