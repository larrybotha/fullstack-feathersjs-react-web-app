// use ajv for the apparently fastest json validation in JS
const Ajv = require('ajv');
const ajv = new Ajv();

// this is the schema of a recipe
const schema = {
  // a recipe is an object
  type: 'object',
  // with properties
  properties: {
    // each property has a description
    name: {
      // with the type of that property
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
    ingredients: {
      // and can be nested
      type: 'array',
      items: {
        type: 'string',
      },
    },
    description: {
      type: 'string',
    },
  },
  required: ['name', 'imageUrl', 'ingredients', 'description'],
};

// create our validator
const validator = ajv.compile(schema);

// and export it so that we can pass data from requests into it.
module.exports = validator;
