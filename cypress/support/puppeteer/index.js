const { setup } = require('@cypress/puppeteer')

module.exports = function puppeteerSetup(on) {
  setup({
    on,
    onMessage: {
      async switchLoginF (browser) {
        const page = await browser.newPage();
        await page.goto("https://practice.expandtesting.com/login");
        await page.bringToFront()
        await page.type('#username', 'practice', {delay: 1000})
        await page.type('#password', 'SuperSecretPassword!', {delay: 1000} )
        await page.click('button[type="submit"]',  {delay: 1000})
        await page.click('Logout',{delay: 1000})
        await page.waitForSelector('flash-message', { visible: true ,})
        await page.close() 
      },
    },
  })
}