'use strict';

const uriTemplateParser = require('url-template');
const parseUri = require('./parse-uri');

function expandUriTemplate(uriTemplate, uriVars) {
    const expandedTemplate = uriTemplateParser.parse(uriTemplate).expand(uriVars);

    return expandedTemplate;
}

function isL10nId(value) {
    return typeof value === 'string' && (value.startsWith('l10n:') || value.startsWith('l10nt:'));
}

function parseL10nId(uri) {
    const {path: key, queryParams: options} = parseUri(uri);

    return {
        key,
        options
    };
}

function parseL10nTemplateId(uriTemplate, uriVars) {
    const uri = expandUriTemplate(uriTemplate, uriVars);

    return parseL10nId(uri);
}

function L10nId(identifier, uriVars) {
    if (isL10nId(identifier) === false) {
        throw Error(`Invalid l10n scheme: ${identifier}`);
    }

    if (identifier.startsWith('l10nt:')) {
        return Object.freeze(parseL10nTemplateId(identifier, uriVars));
    }

    return Object.freeze(parseL10nId(identifier));
}

// static
L10nId.isL10nId = isL10nId;

module.exports = L10nId;
