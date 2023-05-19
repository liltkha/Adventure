import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const data = [];
When("I click Text Box field", () => {
  cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click();
});
When("fill all the fields", () => {
  cy.get("#userName")
    .type("Hermine Grigoryan")
    .invoke("val")
    .then((text) => {
      data.push(text);
    });
  cy.get("#userEmail")
    .type("Hermine@gmail.com")
    .invoke("val")
    .then((text) => {
      data.push(text);
    });
  cy.get("#currentAddress")
    .type("dom 13")
    .invoke("val")
    .then((text) => {
      data.push(text);
    });

  cy.get("#permanentAddress")
    .type("testaddress")
    .invoke("val")
    .then((text) => {
      data.push(text);
    });
})
  When("Submit all data", () => {
    cy.get("#submit").click();
  });

// Then ('All the same filled data should appear in the buttom', ()=>{
   
// cy.get('.border').invoke('text').then((text)=>{
//   cy.log(text)
// })
//divi locatory verncem nuyn dzev invoke anem, heto sarqem json stringi faylmu stugem ardyoq nuyyn en 
// })

