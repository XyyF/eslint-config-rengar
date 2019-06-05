"use strict";

const builtInRules = require("../eslints/index");

module.exports = {
  rules: Object.assign({}, ...Object.keys(builtInRules).map(ruleId => ({
    [ruleId]: builtInRules[ruleId].meta.docs.recommended ? "error" : "off"
  })))
};
