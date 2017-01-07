import {IBot, IInputMessage} from './interfaces';
import * as Telegram from 'node-telegram-bot-api';
// TODO: catching errors
export class TelegramBot implements IBot {
    private api: any;

    constructor(apiKey: string) {
        this.api = new Telegram(apiKey, {polling: true});
    }

    public listen(fn: (message: any) => void): void {
        this.api.on('message', (msg) => {
            fn(this.processMessage(msg));
        });
    }

    public reply(msg: IInputMessage, replyMessage: string): Promise<IInputMessage> {
        return this.api.sendMessage(msg.senderId, replyMessage)
            .then((msg: any) => {
                return this.processMessage(msg);
            });
    }

    public send(userId: string | number, message: string): Promise<IInputMessage> {
        return this.api.sendMessage(userId, message)
            .then((msg: any) => {
                return this.processMessage(msg);
            });
    }

    public processMessage(msg: any): IInputMessage {
        const message: IInputMessage = {
            senderId: msg.from.id,
            text: msg.text
        };

        return message;
    }
}