'use strict';

const defaults = {};
defaults.resolveVars = require('./resolve-vars');
defaults.L10nId = require('./l10nId');
defaults.keyValueProcessor = require('./key-value-processor');
defaults.Translator = require('./translator');

async function JsonTranslator({
    resolveVars = defaults.resolveVars,
    L10nId = defaults.L10nId,
    keyValueProcessor = defaults.keyValueProcessor,
    Translator = defaults.Translator
} = {}) {
    const translator = await Translator();

    function addTranslations(translations) {
        translator.addTranslations(translations);
    }

    function translate(json, {vars = {}, translations = [], data = {}} = {}) {
        addTranslations(translations);

        const reviver = keyValueProcessor({
            vars: resolveVars(vars, data),
            translations,
            data,
            L10nId,
            getTranslation: translator.getTranslation
        });
        const translatedJson = JSON.stringify(JSON.parse(json, reviver));

        return translatedJson;
    }

    return Object.freeze({
        addTranslations,
        translate
    });
}

module.exports = JsonTranslator;
