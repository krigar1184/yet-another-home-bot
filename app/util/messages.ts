// TODO refactor me
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
    },
    SUBSCRIPTION_EXISTS: {
        ru: () =>
            'Хозяин, а ты уже подписан на мой ежедневный спам. Повторно подписываться незачем.',
        en: () =>
            'Master, you have already subscribed.'
    },
    SUBSCRIPTION_SUCCESS: {
        ru: () =>
            'Хозяин, спасибо! Ты подписался на мои ежедневные сообщения тебе и я чувствую себя нужным!',
        en: () =>
            'Master, thank you! I will send you some messages later'
    },
    SUBSCRIPTION_DELETED: {
        ru: () =>
            'Хозяин, ты отписался от моих уведомлений. Надеюсь, ты еще вернешься ко мне.',
        en: () =>
            'Master, you have been unsubscribed. Hope to see you later.'
    },
    SUBSCRIPTION_ALREADY_DELETED: {
        ru: () =>
            'Ты уже меня не читаешь, хозяин. Нет нужды еще раз отписываться.',
        en: () =>
            'Hey, you r trying to unsubscribe again. But you have already been unsubscribed. :('
    }
};

export const getMessage = function(receivedMessageText: string, type: string, locale: string = 'ru'): string {
    return messages[type][locale](receivedMessageText);
};

export const messageTypes = {
    WAITING: 'WAITING',
    QUOTE: 'QUOTE',
    SUBSCRIPTION_EXISTS: 'SUBSCRIPTION_EXISTS',
    SUBSCRIPTION_SUCCESS: 'SUBSCRIPTION_SUCCESS',
    SUBSCRIPTION_DELETED: 'SUBSCRIPTION_DELETED',
    SUBSCRIPTION_ALREADY_DELETED: 'SUBSCRIPTION_ALREADY_DELETED',
};