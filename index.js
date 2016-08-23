'use strict';

const schema = require('./weifund-schema.json');
const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const weifundSchemaValidate = function(schemaInput) {
    const validate = ajv.compile(schema);
    return { 'result': validate(schemaInput), 'errors': validate.errors };
};

module.exports = weifundSchemaValidate;
