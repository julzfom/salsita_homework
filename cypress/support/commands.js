Cypress.Commands.add('AssertQuoteIsVisible', (quote) => { 
    cy.contains(quote).should('be.visible');
})


