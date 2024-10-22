
describe('cyress Locators', () => {
    
  it('class Locator', () => {
      cy.visit('http://100.111.129.21:9336/webui/');      
      cy.wait(1000);

      //Login
      cy.get('.ant-input').eq(1).type("admin")
      cy.get('.ant-input').eq(2).type("admin")
      cy.wait(1000)

      //Create FO DB
      cy.get('.ant-btn-primary').contains('Continue').click();
      cy.get('.styles__control___2STjH').eq(1).click();
      cy.get('.ant-select-selection-search').eq(0).type("6")
      cy.get('.ant-btn-primary').click();
      cy.wait(180000)

      //Generate PA report
      cy.get('.ant-menu-overflow-item').eq(0).click();
      cy.get('.ant-menu-submenu-title').contains('Portfolio').click();
      cy.get('.ant-menu-submenu-title').contains('Portfolio Analysis').click();
      cy.get('.ant-btn').contains('New report').click();
      cy.get('.ReportParametersHeader__actionButton___2lToM').eq(1).click();


  
  })
  
})