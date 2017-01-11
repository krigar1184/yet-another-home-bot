import {IBot, IInputMessage} from '../bot/interfaces';
import {RouterMethod, IRouter} from './interfaces';

export class DefaultRouter implements IRouter {
    private bot: IBot;
    private routes: any = {};
    private defaultAction: any;

    constructor(bot: IBot) {
        const self = this;

        bot.listen(function (msg: IInputMessage): void {
            const action: RouterMethod = self.routes[msg.text];
            if (typeof action === 'function') {
                action(self.bot, msg);
            } else if (typeof self.defaultAction === 'function') {
                self.defaultAction(self.bot, msg);
            }
        });

        this.setBot(bot);
    }

    public setDefaultAction(func: RouterMethod): void {
        this.defaultAction = func;
    }

    public route(message: string, action: RouterMethod): void {
        this.routes[message] = action;
    }

    public setBot(bot: IBot): void {
        this.bot = bot;
    }

    public getBot(): IBot {
        return this.bot;
    }
}