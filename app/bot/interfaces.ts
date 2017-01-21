export enum BotType {
    DEFAULT,
    TELEGRAM
}

/**
 * Interface for user-sent messages.
 */
export interface IInputMessage {
    senderId: string | number;
    text: string;
}

/**
 * Interface for Bot (e.g. telegram bot).
 */
export interface IBot {
    /**
     * Processes messenger-specific message and returns common message object.
     * @param msg
     * @return {IInputMessage}
     */
    processMessage(msg: any): IInputMessage;
    /**
     * Function for processing input messages.
     * @param {Function} fn message processing function
     */
    listen(fn: (message: any) => void): void;
    /**
     * Sends reply message to msg sender
     * @param msg
     * @param replyMessage
     * @return {Promise<IInputMessage>
     */
    reply(msg: any, replyMessage: string): Promise<IInputMessage>;
    /**
     * Sends message to user.
     * @param userId
     * @param message
     * @return {Promise<IInputMessage>
     */
    send(userId: string | number, message: string): Promise<IInputMessage>;

    /**
     * Returns bot type.
     * @return {BotType}
     */
    getType(): BotType;
}