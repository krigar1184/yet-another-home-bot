import * as config from 'config';
import {ForismaticService, defaultQuote} from '../app/service/forismatic';
import * as forismatic from 'forismatic-node';


test('Forismatic test', () => {
    const forismaticInstance = forismatic();
    const result = ForismaticService.getQuote();

    result.then(
        data => expect(data).toEqual({}),
        error => expect(error).toEqual(defaultQuote);
    );
});
