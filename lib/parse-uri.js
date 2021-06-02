'use strict';

function stripLeadingQuestionMark(str) {
    return str.slice(1);
}

function stripTrailingColon(str) {
    return str.slice(-1);
}

function parseUri(uri) {
    const parsedUri = new URL(uri);

    return {
        scheme: stripTrailingColon(parsedUri.protocol),
        path: parsedUri.pathname,
        query: stripLeadingQuestionMark(parsedUri.search),
        queryParams: Object.fromEntries(parsedUri.searchParams)
    };
}

module.exports = parseUri;
