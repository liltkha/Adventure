import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the Playground's page", () => {
  cy.visit("http://www.uitestingplayground.com/overlapped");
});
When("I delete the box", () => {
  cy.get(
    '[style="position: absolute; width: 300px; height: 50px; background-color: #cccccc; top: 67px"]'
  ).then((elem) => {
    const elemHtml = elem.get(0);
    elemHtml.remove();
  });
});

When("I scroll down to the input fields", () => {
  cy.get('[style="overflow-y: scroll; height:100px;"]').scrollIntoView();
});
Then("the Subject input  field should contain {string}", (name) => {
  cy.get('#subject').type( name);
});

