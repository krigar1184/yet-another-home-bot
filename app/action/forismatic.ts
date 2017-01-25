import {IBot, IInputMessage} from '../bot/interfaces';
import {getMessage, messageTypes} from '../util/messages';
import {ForismaticService} from '../service/forismatic';
import {IForismaticQuote} from '../service/interfaces/forismatic';
import {SubscriptionService} from "../service/subscription";
import {ISubscription} from "../service/interfaces/subscription";

function getFullQuoteText(quote: IForismaticQuote): string {
    return quote.quoteText +
        (quote.quoteAuthor.length ? ` (${quote.quoteAuthor})` : '') +
        ` ${quote.quoteLink}`;
}

// TODO Error handling
export class ForismaticAction {
    public static sendQuote(bot: IBot, message: IInputMessage): Promise<void> {
        return ForismaticService.getQuote()
            .then((quote: IForismaticQuote) => {
                bot.send(message.senderId, getFullQuoteText(quote));
            });
    }

    public static spamQuote(bot: IBot): Promise<void> {
        let subscriptions;

        return SubscriptionService.getByType(bot.getType().toString())
            .then((receivers: Array<ISubscription>) => {
                subscriptions = receivers;
                return Promise.all(subscriptions.map((subscription: ISubscription) => bot.send(
                    subscription.senderId, getMessage(null, messageTypes.QUOTE)
                )))
            })
            .then(() => ForismaticService.getQuote())
            .then((quote: IForismaticQuote) => {
                Promise.all(subscriptions.map((subscription: ISubscription) => bot.send(
                    subscription.senderId,
                    getFullQuoteText(quote)
                )));
            });
    }
}