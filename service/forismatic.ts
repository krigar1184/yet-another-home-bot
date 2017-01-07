import * as config from 'config';
import * as forismatic from 'forismatic-node';
import {IForismaticQuote} from './interfaces/forismatic';
const forismaticInstance = forismatic();

export const lang = config.get<string>('forismatic.lang');

export const defaultQuote: IForismaticQuote = {
    quoteText: 'Ignorance never settle a question.',
    quoteAuthor: 'Benjamin Disraeli',
    senderName: '',
    senderLink: '',
    quoteLink: 'http://forismatic.com/en/33ae3b318c/'
};

function getQuote(): Promise<IForismaticQuote> {
    return new Promise((resolve: Function, reject: Function) => {
        forismaticInstance.getQuote({
            lang,
            generateKey: true
        }, function (error: any, quote: IForismaticQuote): void {
            if (!error) {
                resolve(quote);
            } else {
                reject(error);
            }
        });
    });
}

export class Forismatic {
    public static getQuote(): Promise<IForismaticQuote> {
        return getQuote()
            .then((quote: IForismaticQuote) => quote)
            .catch((error) => {
                console.error(error);
                return defaultQuote;
            });
    }
}