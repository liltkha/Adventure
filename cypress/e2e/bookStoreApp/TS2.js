import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Invalid username:
Given('I am on the login page', () => {
    cy.visit('https://demoqa.com/login');
  });
    When('I enter an invalid username', () => {
      cy.get('#userName').type(' ');
    });

     When('I enter a valid password' , () =>{
      cy.get('#password').type('mypassword');
    });
    
    When('I click on the login button', () => {
      cy.get('#login').click();
    });
    
    Then('I should see an error message', () => {
      cy.get('#name').should('contain', 'Invalid username or password!');
    });
    
    When('I should remain on login page', () => {
      cy.url().should('include', '/login');
    });