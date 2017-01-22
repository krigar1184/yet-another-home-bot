import * as config from 'config';
import {TelegramBot} from './app/bot/telegram';
import * as schedule from 'node-schedule'
import {DefaultRouter} from './app/router/default';
import {ForismaticAction} from './app/action/forismatic';
import {SubscriptionAction} from './app/action/subscription';
import {bootstrap} from './app/bootstrap/all';
import {DefaultAction} from "./app/action/default";

const telegramBot = new TelegramBot(config.get<string>('telegram.apiKey'));

bootstrap(config.get<string>('databasePath'))
    .then(() => {
        const router = new DefaultRouter(telegramBot);

        router.setDefaultAction(DefaultAction.default);
        router.route('/quote', ForismaticAction.sendQuote);
        router.route('/subscribe', SubscriptionAction.create);
        router.route('/unsubscribe', SubscriptionAction.delete);

        // TODO move to bootstrap?
        const job = schedule.scheduleJob({hour: 9, minute: 0}, function() {
            ForismaticAction.spamQuote(telegramBot);
        });

        // TODO move console.log to some kind of wrapper
        console.log(new Date() + ' server is up, bot is up too!');
    })
    .catch((error) => {
        // TODO move console.log to some kind of wrapper
        console.log(new Date() + ' bootstrap error', error);
    });
