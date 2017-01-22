import {bootstrap as dbBootstrap} from './db';
import {bootstrap as sequelizeBootstrap} from './sequelize';

export function bootstrap(databasePath: string): Promise<boolean> {
    return dbBootstrap(databasePath)
        .then(() => sequelizeBootstrap(databasePath))
        .then(() => true);
}