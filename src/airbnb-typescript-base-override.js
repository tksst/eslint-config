const x = require("eslint-config-airbnb-typescript/lib/shared");

x.overrides[0].files.push("*.mts", "*.cts");
module.exports = x;
