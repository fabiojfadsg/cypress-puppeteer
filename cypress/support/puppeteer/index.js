const { setup, retry } = require("@cypress/puppeteer");

module.exports = function puppeteerSetup(on) {
  setup({
    on,
    onMessage: {
      async loginPupperteer (browser) {
        const page = await browser.newPage();
        await page.bringToFront()
        await page.goto("https://www.saucedemo.com/v1/index.html");
        await page.type('#username', 'standard_user')
        await page.type('#password', 'secret_sauce!' )
        await page.click('#login-button',  {delay: 1000})
      },
    }
  });
};

