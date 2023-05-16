import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the Playground page", () => {
  cy.visit("http://www.uitestingplayground.com/overlapped");
});
When("I scroll down to the field", () => {
  cy.get('[style="overflow-y: scroll; height:100px;"]').scrollIntoView();
});
When("I enter {string} into the ID input field", (value) => {
  cy.get("#id").type(value);
});
When('I enter {string} into the Name input field', (name) => {
  cy.get("#name").type(name);
});
When("I scroll back up to the top", () => {
  cy.get('[style="overflow-y: scroll; height:100px;"]').scrollTo(0, 0);
});
Then('the Name input field should contain {string}', (name) => {
  cy.get("#name").should("have.value", name);
});