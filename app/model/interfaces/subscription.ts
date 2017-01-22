import * as sequelize from 'sequelize';
import Model = sequelize.Model;
import Instance = sequelize.Instance;

export interface ISeqSubscription extends Instance<any> {
    type: string;
    senderId: string;
    createdAt: Date;
    updatedAt: Date;
}