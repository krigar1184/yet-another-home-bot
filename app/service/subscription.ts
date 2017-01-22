import {sequelize} from "../model/sequelize";
import {ISubscription} from "./interfaces/subscription";

export class SubscriptionService {
    private constructor() {}


    public static create(type: string, senderId: string): Promise<ISubscription> {
        return sequelize.Subscription.findOrCreate({where: {type, senderId}})
            .spread((subscription: ISubscription, created: boolean) => {
                subscription.created = created;
                return subscription;
            })
    }

    public static delete(type: string, senderId: string): Promise<number> {
        return sequelize.Subscription.destroy({where: {type, senderId}});
    }

    public static getByType(type: string): Promise<Array<ISubscription>> {
        return sequelize.Subscription.findAll({
            where: {
                type
            }
        });
    }
}