const { DataTypes } = require('sequelize')
const sequelize = require('../postgres')

const Url = sequelize.define('Url', {
    value:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {
    Url
}