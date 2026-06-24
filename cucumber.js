const { TIMEOUT} =require("node:dns");

module.exports = {
    default: {
        require: [
            "features/stepDefinitions/*.js",
            "support/Hooks.js",
            "support/World.js"

        ],
        paths: ["features/*.feature"],
        
        format: [
            "progress",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
    ],
    publishQuiet: true
    }
};