
import { sequelize } from '../database/database';
import { DataTypes } from "sequelize";
// import Sale from './Sale'

const Product = sequelize.define('products',{
    idProduct:{
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    costPrice: {
        allowNull: false,
        type: DataTypes.REAL
    },
    salePrice: {
        allowNull: false,
        type: DataTypes.REAL
    },
    quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    expireDate: {
        type: DataTypes.DATE
    },
    dateUpdate: {
        type: DataTypes.DATE
    }
},{
    timestamps: false
});

// Product.hasMany(Sale, {foreignKey: 'idSale', sourceKey: 'id'})
// Sale.belongsTo(Product, {foreignKey: 'idSale', sourceKey: 'id'})

export default Product;