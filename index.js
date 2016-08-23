'use strict';

const schema = require('./weifund-schema.json');
const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile(schema);

var weifundSchemaValidate = function(schemaInput) {
    validate(schemaInput);
    return validate;
};

module.exports = weifundSchemaValidate;
