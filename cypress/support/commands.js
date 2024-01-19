/// <reference types="cypress"/> 
// não esqueca de referenciar
// -- Configurações do teste

Cypress.Commands.add('Login',( email, password) => {
    cy.get('#email').type('email');
    cy.get('#password').type('password');
    cy.get('#login').click();
    

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login'); // a url  base tem o endpoint login?
    })
    /*cy.get('body > nav > button').should('be.visible'); // localizar se o botao é visivel => deu erro aqui*/
});
    
Cypress.Commands.add('MsgLoginFalho',() => {
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible'); // localizar se é visivel
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválidos'); // localizar se contem o texto
    
    /*cy.get('body > nav > button').should('be.visible'); // localizar se o botao é visivel => deu erro aqui*/
});