import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Then('The popup should contain the following labels', (datatable) => {
    datatable.hashes().forEach((row) => {
    cy.get('.modal-body').should('contain',row.labels)
    })
})