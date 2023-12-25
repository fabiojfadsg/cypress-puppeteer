describe('Login', () => {
  it('logs in successfully', () => {
    cy.visit('https://practice.expandtesting.com/login')
    cy.puppeteer('switchLoginF')
  })
})







