import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

When("I click yes", ()=>{
    cy.get('.custom-control-label').eq(0).click();
})
Then("it should be text yes", ()=>{
    cy.get('.text-success').contains('Yes');
})
When("I click impressive", ()=>{
    cy.get('.custom-control-label').eq(1).click();
})
Then("It should be text impressive", ()=>{
    cy.get('.text-success').contains('Impressive');
})