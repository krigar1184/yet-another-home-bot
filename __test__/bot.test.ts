import * as config from 'config';
import {TelegramBot} from '../app/bot/telegram';

const telegramBot = new TelegramBot(config.get<string>('telegram.apiKey'));

test('Bot test', () => {
    expect('asd').toEqual('asd');
});
