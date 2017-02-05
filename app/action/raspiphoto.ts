import {IBot, IInputMessage} from "../bot/interfaces";
import {RaspiphotoService} from '../service/raspiphoto';
import {getMessage, messageTypes} from '../util/messages';

export class RaspiphotoAction {
    public static takePhoto(bot: IBot, message: IInputMessage): Promise<void> {
        return bot.reply(message, getMessage(null, messageTypes.WAIT_FOR_PHOTO))
            .then(() => RaspiphotoService.takePhoto())
            .then((photo: Buffer) => {
                return bot.replyWithPhoto(message, photo);
            })
            .catch((error) => {
                console.log(error);
                bot.reply(message, getMessage(null, messageTypes.PHOTO_ERROR));
            });
    }
}