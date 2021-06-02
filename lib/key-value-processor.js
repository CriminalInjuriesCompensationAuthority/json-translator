'use strict';

function keyValueProcessor({vars, L10nId, getTranslation}) {
    return (key, value) => {
        if (L10nId.isL10nId(value)) {
            const l10nId = L10nId(value, vars);

            return getTranslation(l10nId.key, l10nId.options);
        }

        return value;
    };
}

module.exports = keyValueProcessor;
