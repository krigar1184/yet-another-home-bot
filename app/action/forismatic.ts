import * as config from 'config';
import {IBot, IInputMessage} from '../bot/interfaces';
import {getMessage, messageTypes} from '../util/messages';
import {Forismatic} from '../service/forismatic';
import {IForismaticQuote} from '../service/interfaces/forismatic';

function getFullQuoteText(quote: IForismaticQuote): string {
    return quote.quoteText +
        (quote.quoteAuthor.length ? ` (${quote.quoteAuthor})` : '') +
        ` ${quote.quoteLink}`;
}

// TODO Error handling
export class ForismaticAction {
    public static sendQuote(bot: IBot, message: IInputMessage): Promise<void> {
        return Forismatic.getQuote()
            .then((quote: IForismaticQuote) => {
                bot.send(message.senderId, getFullQuoteText(quote));
            });
    }

    public static spamQuote(bot: IBot): Promise<void> {
        const receivers = config.get<number[]>('telegram.receivers');

        return Promise.all(receivers.map((receiver: number) => bot.send(
            receiver, getMessage(null, messageTypes.QUOTE)
        )))
            .then(() => Forismatic.getQuote())
            .then((quote: IForismaticQuote) => {
                Promise.all(receivers.map((receiver: number) => bot.send(
                    receiver,
                    getFullQuoteText(quote)
                )));
            });
    }
}