'use strict';

const L10nId = require('./l10nId');

describe('L10nId', () => {
    describe('Exceptions', () => {
        it('should throw when instantiating with an invalid identifer string', async () => {
            const invalidIdentifer = 'foo';

            expect(() => L10nId(invalidIdentifer)).toThrow(
                Error(`Invalid l10n scheme: ${invalidIdentifer}`)
            );
        });
    });
});
