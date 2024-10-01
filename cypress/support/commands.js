Cypress.Commands.add("accessWithCredentials",(user, password)=>{
    cy.visit('login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    cy.get('.oxd-button').click();
})