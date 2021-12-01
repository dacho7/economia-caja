import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("tienda", "postgres", "postgres", {
  host: "localhost",
  port: 5432,
  username: "postgres",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});
