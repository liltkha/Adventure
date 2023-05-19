import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the page', () => {
    cy.visit('https://demoqa.com/webtables')
})
When('I press the button', () => {
    cy.get('#addNewRecordButton').click()
})
Then('The popup should  be opened', ()=> {
    cy.get('.modal-body').should('be.visible');
})