import express, { json } from 'express';
import morgan from 'morgan';
const bodyParser = require('body-parser');

const app = express()

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({extended: false}))

//importing router
import productRouter from './routes/products';
import invoiceRouter from './routes/invoices';
import saleRouter from './routes/sales'

//routes
app.use('/api/products', productRouter);
app.use('/api/invoices', invoiceRouter);
app.use('/api/sales', saleRouter);

export default app;