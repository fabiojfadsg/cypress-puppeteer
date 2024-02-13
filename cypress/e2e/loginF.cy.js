describe('Login', () => {
  it('logs in successfully', () => {
    
    
    cy.loginCypress()
    cy.wait(2000)
    cy.puppeteer('loginPupperteer')
  })
    



})







