'use strict';

const i18next = require('i18next');

function Translator() {
    const i18nextInstance = i18next.createInstance();

    i18nextInstance.init({
        lng: 'en',
        debug: false,
        resources: {},
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
