class About{
    visit(){
        return cy.visit("https://demoqa.com/");
    }
    clickElements(){
        return cy.get(':nth-child(1) > :nth-child(1) > .card-body').click();
    }
    visitElem(){
        return cy.visit('https://demoqa.com/elements');
    }
    topHead(){
        return cy.get('.playgound-header')
    }
}


export const about = new About();