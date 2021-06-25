import { sequelize } from '../database/database';
import { DataTypes } from "sequelize";

const Sale = sequelize.define('sales',{
    idSale:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    invoice: {
        allowNull: false,
        type: DataTypes.BIGINT
    },
    product: {
        allowNull: false,
        type: DataTypes.BIGINT
    },
    amount: {
        allowNull: false,
        type: DataTypes.REAL
    },
    subtotal: {
        allowNull: false,
        type: DataTypes.REAL
    }
},{
    timestamps: false
});

// Product.hasMany(Sale, {foreignKey: 'idSale', sourceKey: 'id'})
// Sale.belongsTo(Product, {foreignKey: 'idSale', sourceKey: 'id'})

export default Sale;