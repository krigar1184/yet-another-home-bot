import * as config from 'config';
import {TelegramBot} from './bot/telegram';
import * as schedule from 'node-schedule'
import {Forismatic} from './service/forismatic';
import {IForismaticQuote} from './service/interfaces/forismatic';
import {IInputMessage} from './bot/interfaces';
import {messageTypes, getMessage} from './util/messages';

const telegramBot = new TelegramBot(config.get<string>('telegram.apiKey'));

telegramBot.listen(function (msg: IInputMessage) {
    telegramBot.send(msg.senderId, getMessage(msg.text, messageTypes.WAITING));
});

const job = schedule.scheduleJob({hour: 9, minute: 0}, function(){
    const receivers = config.get<Array<number>>('telegram.receivers');

    Promise.all(receivers.map((receiver: number) => telegramBot.send(
        receiver, getMessage(null, messageTypes.QUOTE)
    )))
        .then(() => Forismatic.getQuote())
        .then((quote: IForismaticQuote) => Promise.all(receivers.map((receiver: number) => telegramBot.send(
            receiver,
                quote.quoteText +
                (quote.quoteAuthor.length ? ` (${quote.quoteAuthor})` : '') +
                ` ${quote.quoteLink}`
        ))));
});

// TODO move console.log to wrapper in util
console.log(new Date() + ' server is up, bot is up too!');
