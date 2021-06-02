'use strict';

const i18next = require('i18next');

async function Translator() {
    const i18nextInstance = i18next.createInstance();

    await i18nextInstance.init({
        lng: 'en',
        debug: false,
        resources: {}
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
