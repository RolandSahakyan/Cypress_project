
describe('cyress Locators', () => {
    
    it('class Locator', () => {
        cy.visit(('https://www.airbnb.de/'), {
            headers:{
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/1.18.0"
            }

        })
        // cy.wait(2000)
        // cy.visit('http://localhost:9336/webui/');
        // cy.wait(2000)
  
  
  
        // cy.get('//div/div/input[@type="text"]').type('admin'); 
        // cy.wait(1000)
  
        // cy.get('//*[@type="password"]').type('admin'); 
        // cy.wait(1000)
  
        // cy.get('//*[@type="submit"]').click(); 
  
  
    
    })
  })