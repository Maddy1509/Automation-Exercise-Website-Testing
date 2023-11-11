 class EItest{
    contactUsPage(){
        cy.visit('https://automationexercise.com/contact_us');
        cy.get("input[placeholder='Name']").type('Madhavan');
        cy.get("input[placeholder='Email']").type('madhavan.chandar15@gmail.com');
        cy.get("input[placeholder='Subject']").type('error in cart');
        cy.get("#message").type('cannot decrease the quantity of the product in the product page');
        cy.get("input[value='Submit']").click();
    

    }
    
 }
 export default EItest;