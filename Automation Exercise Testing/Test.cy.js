import EItest from "../../../test";

describe('Automation Excercise Testing' , function() {
    let data, Selector;
    before('Fixture', () => {
        
        cy.fixture('selectors.json').then((selector) => {
            Selector =  selector;
        });
    });

    it('Test case 1 : verifying the url', function(){
        cy.homepage(Selector)
    })

    it('Test case 2 :redirect to the login page', function(){
        cy.loginPage(Selector)
    })
    
    it('Test case 3 :verifying the Signup page', function(){
        cy.signup(Selector)
    })

    it('Test case 4 : verifying login functionality with postive input',function(){
        
        cy.login(Selector)
        
    })
        
    it('Test case 5: verifying the product page',function(){
        cy.productPage(Selector)

    })

    it('Test case 6: Add to cart',function(){
       cy.cart(Selector)
       

    })

    it('Test case 7 : verifying the email subscription  ', function(){
        cy.emailSubscription(Selector)
      
    })

    it('Test case 8 : verifying if the contact us button is redirecting to contact us page', function(){
        cy.contactUs(Selector)
       
    })

    it('Test case 9 : verifying if details is filled in the contact us ',function(){
        const Contact= new EItest
        Contact.contactUsPage()

    })

    it('Test case 10 : verifying the logout functionality', function(){
        cy.logout(Selector)
    })

})