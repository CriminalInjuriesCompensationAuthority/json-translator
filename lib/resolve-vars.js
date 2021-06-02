'use strict';

const jsonPointer = require('json-pointer');

function getData(value, data) {
    if (value && typeof value === 'object' && !Array.isArray(value) && '$data' in value) {
        const pointer = value.$data;

        return jsonPointer.get(data, pointer);
    }

    return value;
}

function resolveVars(vars, data) {
    const resolvedVars = {};

    Object.keys(vars).forEach(key => {
        const value = vars[key];

        resolvedVars[key] = getData(value, data);
    });

    return resolvedVars;
}

module.exports = resolveVars;
