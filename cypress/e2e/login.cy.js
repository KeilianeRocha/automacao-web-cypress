//hooks
    //before - antes de todos os testes => cy.visit('https://automacao.qacoders-academy.com.br/login'); //Acessar a url base
    //beforeEach - antes de cada teste
    //after - depois de todos os testes
    //afterEach - depois de cada teste
const element = require("../fixtures/login.json")
/// <reference types="cypress"/> 
beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login'); //Acessar a url base
});

afterEach(() => {
    cy.screenshot(); //tira print do resultado do teste
})
describe('Login', () => {
    
    it('Login com sucesso', () => { //=> Cenário 1/caminho feliz
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSWORD');
        cy.Login(email, password);


/*
    1. Dado que eu esteja na tela de login
    2. Vou digitar o email no campo email
    3. Senha no campo senha
    4. Clicar no botão entrar
    */
    //cy.get('#email').type('sysadmin@qacoders.com'); // buscar e preencher
    //cy.get('#password').type('1234@Test');
    //cy.get('#login').click(); //clicar
/* 
5. Dado que o email e senha estejam corretos
6. Devo ser redirecionado para a tela home
*/
    //cy.location().should((loc) => {
        //expect(loc.pathname).to.eq('/login'); // a url  base tem o endpoint login?
    //})
    //cy.get('body > nav > button').should('be.visible'); // localizar se o botao é visivel
});

it('e-mail for válido e sanha for inválido', () => { //=> Cenário 2/exceção
    /*
    1. Dado que eu esteja na tela de login
    2. Vou digitar o email válido no campo email
    3. Senha inválida no campo senha
    4. Clicar no botão entrar
    */
    cy.get(element.input_email).type(Cypress.env('EMAIL')); // buscar e preencher
    cy.get(element.input_password).type(Cypress.env('PASSWORD_INVÁLIDO'));
    cy.get(element.btn_login).click().screenshot('Bt_entrar'); //Tira a foto somente do botão
    cy.MsgLoginFalho()
/* 
5. Dado que o email esteja válido 
6. E a senha estejam inválida
7. Não devo ser redirecionado para a tela home
msg de erro => 
*/
    
});
it('e-mail for inválido e sanha for válida', () => { //=> Cenário 3/exceção
    /*
    1. Dado que eu esteja na tela de login
    2. Vou digitar o email inválido no campo email
    3. Senha válida no campo senha
    4. Clicar no botão entrar
    */
    cy.get(element.input_email).type(Cypress.env('EMAIL_INVÁLIDO')); // buscar e preencher
    cy.get(element.input_password).type(Cypress.env('PASSWORD'));
    cy.get(element.btn_login).click(); //clicar
    cy.MsgLoginFalho()
/* 
5. Dado que o email esteja válido 
6. E a senha estejam inválida
7. Não devo ser redirecionado para a tela home
msg de erro => 
*/
});
});
