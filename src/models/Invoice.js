import { sequelize } from '../database/database';
import { DataTypes } from "sequelize";

const Invoice = sequelize.define('products',{
    idInvoice:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    client: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    total: {
        allowNull: false,
        type: DataTypes.REAL,
        defaultValue: 0
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    type: {
        type: DataTypes.TEXT,
        defaultValue: 'PAGADO'
    },
    address: {
        type: DataTypes.TEXT
    }
},{
    timestamps: false
});

Invoice.sync(() => {
    console.log('Invoice syncronizada')
})

export default Invoice;