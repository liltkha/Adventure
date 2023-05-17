import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
  
  
  //Invalid password:
  Given('I am on the login page', () => {
    cy.visit('https://demoqa.com/login');
  });
  When('I enter a valid username', () => {
    cy.get('#userName').type('myusername');
   
  });
  
  When('I enter an invalid password' , () =>{
    cy.get('#password').type(' ');
  });

  When('I click login button', () => {
    cy.get('#login').click();
  });
  
  Then('I should see error message', () => {
    cy.get('#name').should('contain', 'Invalid username or password!');
  });
  
  When('I should remain on the login page', () => {
    cy.url().should('include', '/login');
  });