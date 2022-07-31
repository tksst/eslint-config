const path = require("path");

// ESLint's parser settings cannot be shared as is because it is absolute path.
function relativize(config) {
    if (config.parser !== undefined && config.parser !== null) {
        config.parser = path.relative(".", config.parser);
    }
}

module.exports = relativize;
