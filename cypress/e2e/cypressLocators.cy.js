
describe('cyress Locators', () => {
    
    it('class Locator', () => {
        cy.visit('https://pms-staging.avangate.tech/');
        cy.wait(1000)
        //cy.get('.pms-button').click();

        cy.visit('https://pms-staging.avangate.tech/');
        cy.wait(500)

        cy.get('[id="username"]').type('rolandtest14@gmail.com'); 

        cy.get('[id="password"]').type('test2121'); 
        cy.wait(500)

        cy.get('.pms-button').click(); 
        cy.wait(5000)

        cy.get('div').find('ul').find('li').eq(5).click();


    
    })
})