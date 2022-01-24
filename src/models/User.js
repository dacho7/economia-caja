import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
  document: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true,
  },
  names: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  surnames: {
    type: DataTypes.TEXT,
  },
  addres: {
    type: DataTypes.TEXT,
  },
  phone: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.TEXT,
  },
  birthday: {
    type: DataTypes.TEXT,
  },
  type: {
    type: DataTypes.TEXT, //(D,C,B,A) type of priority
  },
  role: {
    type: DataTypes.TEXT, //(manager, admin,employed, client)
  },
});

User.sync()
  .then(() => console.log("ok User"))
  .catch((e) => console.log(e));
export default User;
