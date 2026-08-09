const { defineConfig } = require('@playwright/test');
const { createAzurePlaywrightConfig, ServiceOS } = require('@azure/playwright');
const { DefaultAzureCredential } = require('@azure/identity');

/* Load the base config (support both ESM default export and CommonJS) */
let baseConfig = require('./playwright.config');
baseConfig = baseConfig && baseConfig.default ? baseConfig.default : baseConfig;

/* Learn more about service configuration at https://aka.ms/pww/docs/config */
module.exports = defineConfig(
  Object.assign(
    {},
    baseConfig,
    createAzurePlaywrightConfig(baseConfig, {
      exposeNetwork: '<loopback>',
      connectTimeout: 3 * 60 * 1000, // 3 minutes
      os: ServiceOS.LINUX,
      credential: new DefaultAzureCredential(),
    }),
    {
      /*
      Enable Playwright Workspaces Reporter:
      The HTML reporter must be included before Playwright Workspaces Reporter.
      */
      reporter: [
        ["html", { open: "never" }],
        ["@azure/playwright/reporter"],
      ],
    }
  )
);
