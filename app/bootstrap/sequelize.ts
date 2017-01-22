import * as Sequelize from 'sequelize';
import {init} from '../model/sequelize'

export function bootstrap(databasePath: string): Promise<any> {
    return init(new Sequelize('', '', '', {
        host: 'localhost',
        dialect: 'sqlite',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },

        // SQLite only
        storage: databasePath
    }))
        .then(() => true);
}