import * as sequelize from 'sequelize';
import DataTypeAbstract = sequelize.DataTypeAbstract;
import Sequelize = sequelize.Sequelize;
import DataTypes = sequelize.DataTypes;

export = function(sequelize: Sequelize, dataTypes: DataTypes) {
    return sequelize.define('subscription', {
        type: {type: dataTypes.STRING, primaryKey: true},
        senderId: {type: dataTypes.STRING, primaryKey: true}
    });
};
