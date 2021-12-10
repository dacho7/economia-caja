import express, { json } from "express";
import morgan from "morgan";
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//cors
app.use(cors());

//middlewares
app.use(morgan("dev"));
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));

//importing router
import productRouter from "./routes/products";
import invoiceRouter from "./routes/invoices";
import saleRouter from "./routes/sales";
import userRouter from "./routes/users";
import accountRouter from "./routes/accounts";

//routes
app.use("/api/products/", productRouter);
app.use("/api/invoices", invoiceRouter);
app.use("/api/sales", saleRouter);
app.use("/api/users", userRouter);
app.use("/api/accounts", accountRouter);

export default app;
