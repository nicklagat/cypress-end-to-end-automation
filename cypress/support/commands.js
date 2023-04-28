/// <reference types="cypress" />
// ***********************************************
// eslint-disable-next-line no-undef
Cypress.Commands.add("getByData", (selector)=>{
    return cy.get(`[data-test=${selector}]`)
})