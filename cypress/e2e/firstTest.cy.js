/// <reference types="Cypress"/>

it('', () => {
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.contains('Search')
});

it('', () => {
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.contains('span', 'Search')
});

it('', () => {
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.contains('SEARCH', {matchCase: false})
});

it.only('', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter')
    cy.get('li').contains('Get MDN Plus')
});