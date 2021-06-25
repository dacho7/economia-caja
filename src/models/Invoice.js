import { sequelize } from '../database/database';
import { DataTypes } from "sequelize";
// import Sale from './Sale'

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
        type: DataTypes.REAL
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    type: {
        type: DataTypes.TEXT,
    },
    address: {
        type: DataTypes.TEXT
    }
},{
    timestamps: false
});

// Product.hasMany(Sale, {foreignKey: 'idSale', sourceKey: 'id'})
// Sale.belongsTo(Product, {foreignKey: 'idSale', sourceKey: 'id'})

export default Invoice;