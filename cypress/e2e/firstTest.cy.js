/// <reference types="Cypress"/>

// 1 lecture

it('By ID', () => {
    cy.visit('https://facebook.com')
    cy.get('#email')
});

it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('.DocSearch-Button')
});

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('nav')
});

it('By Tag value', () => {
    cy.visit('https://facebook.com')
    cy.get('[name="pass"]')
});

it('By Different Tag', () => {
    cy.visit('https://facebook.com')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it('By Different Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('button[type="button"][aria-label="Search"]')
});

it.only('By Contains name', () => {
    cy.visit('https://next.privat24.ua')
    cy.get('*[class^=card]')
});


// 2 lecture

it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('nav.w-sidebar').find('ul').find('li').find('a').eq(0)
});