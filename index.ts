import * as config from 'config';
import {TelegramBot} from './app/bot/telegram';
import * as schedule from 'node-schedule'
import {DefaultRouter} from './app/router/default';
import {ForismaticAction} from './app/action/forismatic';

const telegramBot = new TelegramBot(config.get<string>('telegram.apiKey'));

const router = new DefaultRouter(telegramBot);
router.route('/quote', ForismaticAction.sendQuote);

// TODO move to bootstrap?
const job = schedule.scheduleJob({hour: 9, minute: 0}, function() {
    ForismaticAction.spamQuote(telegramBot);
});

// TODO move console.log to some kind of wrapper
console.log(new Date() + ' server is up, bot is up too!');
