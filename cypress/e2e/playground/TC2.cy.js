import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

  When('I click "home"', () =>{
    cy.get(':nth-child(1) > .nav-link').click();
  })
  Then('It enters the "home" page', () =>{
    cy.visit('http://www.uitestingplayground.com/home').should('exist');
  })
  When('I click "resources"', () =>{
    cy.get(':nth-child(2) > .nav-link').click();
  })
  Then('It enters the "resources" page', () =>{
    cy.visit('http://www.uitestingplayground.com/resources').should('exist');
  })
  When('I check if Scenario exists', () =>{
    cy.get('.container > :nth-child(3)').should('exist');
  })
  Then('it  contain "Scenario"', ()=>{
    cy.get('.container > :nth-child(3)').contains('Scenario');
  })
  When("I Check if the Scenario elements exist", ()=>{
    cy.get('.container > ul > :nth-child(1)').should('exist');
    cy.get('.container > ul > :nth-child(2)').should('exist')
  })
  Then('it  contain rigth texts', ()=>{
    cy.get('.container > ul > :nth-child(1)').contains('Record setting text into the Name input field (scroll element before entering the text).');
    cy.get('.container > ul > :nth-child(2)').contains('Then execute your test to make sure that the text was entered correctly.')
  })