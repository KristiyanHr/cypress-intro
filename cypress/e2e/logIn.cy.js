describe('Login tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/login'); // Пътя към страницата с формата за логин
    });
  
    it('enter submit with invalid email', () => {
      cy.get('[data-test-id="login-email"]').type('invalid_email');
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-error"]').should('be.visible');
    });
  
    it('enter submit with empty password', () => {
      cy.get('[data-test-id="login-email"]').type('valid@email.com');
      cy.get('[data-test-id="login-password"]').type('');
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-error"]').should('be.visible');
    });
  
    it('enter submit with incorrect credentials', () => {
      cy.get('[data-test-id="login-email"]').type('wrong@email.com');
      cy.get('[data-test-id="login-password"]').type('wrongpassword');
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-error"]').should('be.visible');
    });
  });
  