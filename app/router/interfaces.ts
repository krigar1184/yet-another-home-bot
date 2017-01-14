import {IBot, IInputMessage} from '../bot/interfaces';

export type RouterMethod = (bot: IBot, message?: IInputMessage) => Promise<void>;

/**
 * Router interface.
 */
export interface IRouter {
    /**
     * Registers action method as method called, when message passes to bot.
     * @param message
     * @param action
     */
    route(message: string, action: RouterMethod): void;

    /**
     * Sets default action method.
     * @param func
     */
    setDefaultAction(func: RouterMethod): void;

    /**
     * Sets bot (for listening messages and making responses).
     * @param bot
     */
    setBot(bot: IBot): void;

    /**
     * Gets current bot (for listening messages and making responses).
     */
    getBot(): IBot;
}