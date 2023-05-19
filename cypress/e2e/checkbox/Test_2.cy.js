import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";

Then('Elements should contain following fields', (datatable)=>{
    datatable.hashes().forEach((row) => {
        cy.get('.menu-list').should('contain',row.Fields)
        })
})
