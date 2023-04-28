/// <reference types="cypress" />
describe("Load the todos page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Add Todos", () => {
    cy.clearLocalStorage()
    cy.getByData('todo').should('have.length',0)
    cy.getByData('todo-input').type('Learn Cypress')

  });
});
