import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
When("I click plus option", ()=>{
    cy.get(".rct-icon-expand-all").eq(0).click();
})
Then("It should be more options for checkbox", (datatable)=>{
    datatable.hashes().forEach((row) => {
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2)').should('contain',row.fields)
        })
})