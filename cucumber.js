const { TIMEOUT} =require("node:dns");

module.exports = {
    default: {
        require: [
            "features/stepDefinitions/*.js",
            "support/Hooks.js",
            "support/World.js"

        ],
        paths: ["features/*.feature"],
        
    }
};