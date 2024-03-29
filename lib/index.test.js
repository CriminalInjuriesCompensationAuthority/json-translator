'use strict';

const JsonTranslator = require('./index');

describe('JsonTranslator', () => {
    describe('Given JSON with no L10nIds', () => {
        it('should return the JSON unchanged', () => {
            const json = '{"foo":"hello","bar":1,"baz":[]}';
            const jsonTranslator = JsonTranslator();
            const translatedJson = jsonTranslator.translate(json);

            expect(translatedJson).toEqual(json);
        });
    });

    describe('Given JSON with L10nIds ( l10n: )', () => {
        it('should replace L10nIds with a specified translation', () => {
            const json = '{"foo":"l10n:foo?lng=en&ns=namespace","bar":1,"baz":[]}';
            const jsonTranslator = JsonTranslator();
            const translatedJson = jsonTranslator.translate(json, {
                translations: [
                    {
                        language: 'en',
                        namespace: 'namespace',
                        resources: {
                            foo: 'hello world 1'
                        }
                    }
                ]
            });

            expect(translatedJson).toEqual('{"foo":"hello world 1","bar":1,"baz":[]}');
        });
    });

    describe('Given JSON with L10nId templates ( l10nt: )', () => {
        it('should replace L10nId templates with a specified translation', () => {
            const json = '{"foo":"l10nt:foo{?lng,ns}","bar":"l10nt:bar{?lng,ns}","baz":[]}';
            const jsonTranslator = JsonTranslator();
            const translatedJson = jsonTranslator.translate(json, {
                vars: {
                    lng: {$data: '/answers/meta/lang'},
                    ns: 'namespace'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'namespace',
                        resources: {
                            foo: 'hello world 2',
                            bar: 'hello world 3'
                        }
                    }
                ],
                data: {
                    answers: {
                        meta: {
                            lang: 'en'
                        }
                    }
                }
            });

            expect(translatedJson).toEqual(
                '{"foo":"hello world 2","bar":"hello world 3","baz":[]}'
            );
        });

        it('should replace L10nId templates with a specified translation which includes moustache syntax placeholders', () => {
            const json = '{"foo":"l10nt:foo{?lng,ns}","bar":1,"baz":[]}';
            const jsonTranslator = JsonTranslator();
            const translatedJson = jsonTranslator.translate(json, {
                vars: {
                    lng: {$data: '/answers/meta/lang'},
                    ns: 'namespace'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'namespace',
                        resources: {
                            foo:
                                'hello world 3. {{ govukInsetText({text: "lorem ipsum"}) }} another sentence'
                        }
                    }
                ],
                data: {
                    answers: {
                        meta: {
                            lang: 'en'
                        }
                    }
                }
            });

            expect(translatedJson).toEqual(
                '{"foo":"hello world 3. {{ govukInsetText({text: \\"lorem ipsum\\"}) }} another sentence","bar":1,"baz":[]}'
            );
        });
    });

    describe('Exceptions', () => {
        it('should throw if calling "addTranslations" without an array of translations', () => {
            const jsonTranslator = JsonTranslator();

            expect(() => jsonTranslator.addTranslations()).toThrow(
                Error('Method "addTranslations" expects an Array')
            );
        });
    });

    describe('Value translator', () => {
        it('should replace L10nId templates with a specified translation', () => {
            const jsonTranslator = JsonTranslator();
            const translateKeyValue = jsonTranslator.getKeyValueTranslator({
                vars: {
                    lng: {$data: '/answers/meta/lang'},
                    ns: 'namespace'
                },
                translations: [
                    {
                        language: 'en',
                        namespace: 'namespace',
                        resources: {
                            foo: 'hello world 2'
                        }
                    }
                ],
                data: {
                    answers: {
                        meta: {
                            lang: 'en'
                        }
                    }
                }
            });

            expect(translateKeyValue(null, 'l10nt:foo{?lng,ns}')).toEqual('hello world 2');
        });
    });
});
