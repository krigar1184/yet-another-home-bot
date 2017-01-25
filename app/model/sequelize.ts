import * as sequelize from 'sequelize';
import Sequelize = sequelize.Sequelize;

let instance;

function init(sequelize: Sequelize): Promise<any> {
    instance = sequelize;
    instance.Subscription = instance.import('./subscription');
    return instance.sync();
}

export {instance as sequelize, init};