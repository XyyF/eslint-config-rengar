const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/rengar');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
});

ruleTester.run('test rule', rule, {
  valid: [
    `const bar = {
      meta: {},
      double: num => num * 2
    }`
  ],
  invalid: [
    {
      code: `const bar = {
        meta: {},
        double: num => num * 2,
      }`,
      errors: [{
        message: 'The "meta" property should be above the "double" property on line 2.'
      }]
    }
  ]
});