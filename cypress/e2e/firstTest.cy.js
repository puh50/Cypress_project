/// <reference types="Cypress"/>

it('SHOULD', () => {
    cy.visit('https://facebook.com/')
    cy.get('#email')
        .type('test@mail.com')
        .should('have.value', 'test@mail.com')
        .and('be.visible')
});

it('EXPECT', () => {
    cy.visit('https://facebook.com/')
    cy.get('#email')
        .type('test@mail.com').then((input) => {
            expect(input).to.have.value('test@mail.com')
        })
});

it('Should be checked', () => {
    cy.visit('http://the-internet.herokuapp.com/checkboxes')
    cy.get('#checkboxes').find('input').eq(1)
        .should('be.checked')
});

it('check is visible a link by hover', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Glossary/WebRTC')
    cy.get('.main-menu').find('.top-level-entry-container').eq(2)
        // trigger() works with js actions
        // if there is a :hover by css use npm install cypress-real-events package to use .realHover event
        // .trigger('mouseover') 
        .realHover()
    cy.get('#mdn-plus-menu').find('li').eq(2)
        .should('be.visible')
});

it('check is correct attr in input', () => {
    cy.visit('http://the-internet.herokuapp.com/inputs')
    cy.get('input')
        .should('have.attr', 'type')
        .and('match', /number/)
});

it.only('check is correct URL', () => {
    cy.visit('http://the-internet.herokuapp.com/inputs')
    cy.url()
        .should('eq', 'http://the-internet.herokuapp.com/inputs')
});

it('SHOULD MY', () => {
    cy.visit('https://docs.cypress.io/guides/references/assertions')
    cy.get('[data-test="References-children"] > :nth-child(1) > li > .rounded-md')
        .invoke('attr', 'aria-current')
        .should('include', 'page')
});

it('SHOULD MY2', () => {
    cy.visit('https://docs.cypress.io/guides/references/assertions')
    cy.get('[data-test="References-children"] > :nth-child(1) > li > .rounded-md')
        .should('have.attr', 'aria-current', 'page')
        .and('have.text', '\n          Assertions\n        ')
});


