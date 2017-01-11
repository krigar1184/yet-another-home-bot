import {IBot, IInputMessage, BotType} from './interfaces';
export abstract class DefaultBot implements IBot {
    protected api: any;
    protected type: number = BotType.DEFAULT;

    constructor() {
        return this;
    }

    public abstract listen(fn: (message: any) => void): void;

    public abstract reply(msg: IInputMessage, replyMessage: string): Promise<IInputMessage>;

    public abstract send(userId: string | number, message: string): Promise<IInputMessage>;

    public abstract processMessage(msg: any): IInputMessage;

    public getType(): BotType {
        return this.type;
    }

    // TODO real text parsing
    protected parseText(text: string): string {
        return text;
    }
}