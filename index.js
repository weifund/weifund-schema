
const schema = require('weifund-schema.json');
const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile(schema);

const weifundSchemaValidate = function(schemaInput) {
  return validate(schemaInput);
};

module.exports = weifundSchemaValidate;
