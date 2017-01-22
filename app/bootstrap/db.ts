import * as sqlite3 from 'sqlite3';

export function bootstrap(databasePath: string): Promise<boolean> {
    return new Promise((resolve: Function, reject: Function) => {
        const db = new sqlite3.Database(databasePath, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}