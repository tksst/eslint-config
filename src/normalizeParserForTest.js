const r = new RegExp("^.+/(node_modules/.+)$");

// ESLint's parser settings cannot be shared as is because it is absolute path.
function normalizeParserForTest(config) {
    if (config.parser !== undefined && config.parser !== null) {
        const result = r.exec(config.parser);
        if (result !== null) {
            config.parser = result[1];
        }
    }
}

module.exports = normalizeParserForTest;
