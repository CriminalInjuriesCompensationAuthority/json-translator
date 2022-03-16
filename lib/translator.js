'use strict';

const i18next = require('i18next');

function Translator() {
    const i18nextInstance = i18next.createInstance();

    i18nextInstance.init({
        lng: 'en',
        debug: false,
        // resources: {},
        interpolation: {
            // override default to cater for the Nunjucks GOVUK components
            // within translatable strings. Nunjucks uses `{{...}}` to
            // denote a variable so they need to persist in the string.
            prefix: '{{~',
            suffix: '~}}'
        }
    });

    function addTranslations(translations) {
        if (Array.isArray(translations)) {
            translations.forEach(resourceBundle => {
                i18nextInstance.addResourceBundle(
                    resourceBundle.language,
                    resourceBundle.namespace,
                    resourceBundle.resources,
                    false,
                    false
                );
            });
        } else {
            throw Error('Method "addTranslations" expects an Array');
        }
    }

    function getTranslation(key, options) {
        return i18nextInstance.t(key, options);
    }

    return Object.freeze({
        addTranslations,
        getTranslation
    });
}

module.exports = Translator;

// 'use strict';

// const i18next = require('i18next');

// const o = i18next.init({
//     lng: 'en', // if you're using a language detector, do not define the lng option
//     debug: true,
//     initImmediate: false
// });

// console.log('>>>>>>>>>>>>>>>>11111: ', o instanceof Promise);

// function Translator() {
//     const i18nextInstance = i18next.createInstance();

//     function addTranslations(translations) {
//         if (Array.isArray(translations)) {
//             // TODO: handle multiple translation objects
//             const translation = translations[0];
//             const resources = {
//                 [translation.language]: {
//                     [translation.namespace]: translation.resources
//                 }
//             };

//             const a = i18nextInstance.init({
//                 lng: 'en',
//                 debug: false,
//                 resources,
//                 interpolation: {
//                     // override default to cater for the Nunjucks GOVUK components
//                     // within translatable strings. Nunjucks uses `{{...}}` to
//                     // denote a variable so they need to persist in the string.
//                     prefix: '{{~',
//                     suffix: '~}}'
//                 }
//             });

//             console.log('>>>>>>>>>>>>>>>>: ', a instanceof Promise);
//         } else {
//             throw Error('Method "addTranslations" expects an Array');
//         }
//     }

//     function getTranslation(key, options) {
//         return i18nextInstance.t(key, options);
//     }

//     return Object.freeze({
//         addTranslations,
//         getTranslation
//     });
// }

// module.exports = Translator;
