import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
When("I click Check Box field", ()=> {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
})
When("I click home checkbox", ()=>{
    cy.get('.rct-checkbox>.rct-icon').click();
})
Then("It should add a writing", () =>{
    cy.get('.check-box-tree-wrapper').should('exist');
})