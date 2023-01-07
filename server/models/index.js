const { DataTypes } = require('sequelize');
const  sequelize = require('../db');

const  List = sequelize.define('list', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    }
})

const  Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    list_id: {
        type: DataTypes.INTEGER, allowNull: false
    }
})

List.hasMany(Task, { foreignKey: 'id' });
Task.belongsTo(List, { foreignKey: 'list_id' });