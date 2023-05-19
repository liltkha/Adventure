import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
 
When("I click radiobutton", ()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
})
Then("I should be on that page and see a text", ()=>{
    cy.get('.col-md-6 > :nth-child(2)').should("exist");
})