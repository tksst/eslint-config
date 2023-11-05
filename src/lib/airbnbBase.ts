import bestPractices from "eslint-config-airbnb-base/rules/best-practices";
import errors from "eslint-config-airbnb-base/rules/errors";
import es6 from "eslint-config-airbnb-base/rules/es6";
import node from "eslint-config-airbnb-base/rules/node";
import strict from "eslint-config-airbnb-base/rules/strict";
import style from "eslint-config-airbnb-base/rules/style";
import variables from "eslint-config-airbnb-base/rules/variables";

export default [
    { rules: bestPractices.rules },
    { rules: es6.rules },
    { rules: node.rules },
    { rules: style.rules },
    { rules: errors.rules },
    { rules: strict.rules },
    { rules: style.rules },
    { rules: variables.rules },
];
