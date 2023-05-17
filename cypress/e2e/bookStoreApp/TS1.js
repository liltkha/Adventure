import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Successful login:
Given('I am on the Login page', () => {
    cy.visit('https://demoqa.com/login');
  });
  
  When('I enter a valid username and password', () => {
    cy.get('#userName').type('myusername');
    cy.get('#password').type('mypassword');
  });
  
Then('I click the login button', () => {
    cy.get('#login').click();
  });
  