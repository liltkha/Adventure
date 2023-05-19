import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
import {page_1}  from "../pages/demoQa";

Given("I am on demoQa page", ()=>{
   page_1.visit();
})
When("I click elements", ()=>{
    page_1.clickElements();
})
Then("the checkbox page should be opened", ()=> {
   page_1.visitElem().should('exist');
   page_1.topHead().should('exist').contains('Elements');
})
