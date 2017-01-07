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
     */
    reply(msg: any, replyMessage: string): void | Promise<IInputMessage>;
    /**
     * Sends message to user.
     * @param userId
     * @param message
     */
    send(userId: string | number, message: string): void | Promise<IInputMessage>;
}