
import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Playground page', () => {
    cy.visit('http://www.uitestingplayground.com/overlapped')
  })
  
  When('I scroll down to the input fields', () => {
    cy.get('[style="overflow-y: scroll; height:100px;"]').scrollIntoView()
  })
  
  When('I enter 111 into the ID input field', () => {
    cy.get('#id').type(111)
  })
  When('I enter "My name" into the Name input field', () => {
    cy.get('#name').type("My name")
  })
  
  When('I scroll back up to the top', () => {
    cy.get('[style="overflow-y: scroll; height:100px;"]').scrollTo(0, 0)
  })
  
  Then('the Name input field should contain "My name"', () => {
    cy.get('#name').should('have.value', "My name")
  })
  