import {Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

let array = [
   'Hermine',
    "Grigoryan",
]


When('I fill all fields', () =>{
   cy.get('#firstName').type(array[0]);
   cy.get('#lastName').type(array[1]);
   cy.get('#userEmail').type('test@gmail.com');
   cy.get('#age').type(12);
   cy.get('#salary').type(350.000);
   cy.get('#department').type('Auction')
})
When('I click on the Submit button', () => {
    cy.get('#submit').click();
})
Then('An appropriate column should be added in the table', () => {
    cy.get('.ReactTable').should('contain', 'Hermine, Grigoryan')
})