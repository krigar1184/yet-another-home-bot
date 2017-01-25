import {IBot, IInputMessage} from '../bot/interfaces';
import {getMessage, messageTypes} from '../util/messages';

export class DefaultAction {
    public static default(bot: IBot, message: IInputMessage): Promise<void> {
        return bot.reply(message, getMessage(message.text, messageTypes.WAITING)).then(() => {});
    }
}
