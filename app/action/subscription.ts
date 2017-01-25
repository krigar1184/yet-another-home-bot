import {IBot, IInputMessage} from '../bot/interfaces';
import {SubscriptionService} from '../service/subscription';
import {ISubscription} from '../service/interfaces/subscription';
import {getMessage, messageTypes} from '../util/messages';

export class SubscriptionAction {
    public static create(bot: IBot, message: IInputMessage): Promise<void> {
        return SubscriptionService.create(bot.getType().toString(), message.senderId.toString())
            .then((subscription: ISubscription) => {
                if (!subscription.created) {
                    bot.reply(message, getMessage(null, messageTypes.SUBSCRIPTION_EXISTS));
                } else {
                    bot.reply(message, getMessage(null, messageTypes.SUBSCRIPTION_SUCCESS));
                }
            });
    }

    public static delete(bot: IBot, message: IInputMessage): Promise<void> {
        return SubscriptionService.delete(bot.getType().toString(), message.senderId.toString())
            .then((result) => {
                if (result === 0) {
                    bot.reply(message, getMessage(null, messageTypes.SUBSCRIPTION_ALREADY_DELETED));
                } else {
                    bot.reply(message, getMessage(null, messageTypes.SUBSCRIPTION_DELETED));
                }
            });
    }
}
