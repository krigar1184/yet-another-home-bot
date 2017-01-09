export const messages = {
    WAITING: {
        ru: (msg: string) =>
            `Хозяин, я пока слишком глуп, чтобы общаться с тобой. Напиши, пожалуйста, "${msg}" кому-нибудь другому.`,
        en: (msg: string) =>
            `Sorry, Master. I am too stupid to talk to you right now. Send ${msg} to someone else.`
    },
    QUOTE: {
        ru: () =>
            'Привет, хозяин! Надеюсь, у тебя будет хороший день. А чтобы ты не скучал, вот тебе мотивирующая цитата.',
        en: () =>
            'Hello, Master! What a wonderful day! I have a new quote for you.'
    }
};

export const getMessage = function(receivedMessageText: string, type: string, locale: string = 'ru'): string {
    return messages[type][locale](receivedMessageText);
};

export const messageTypes = {
    WAITING: 'WAITING',
    QUOTE: 'QUOTE'
};