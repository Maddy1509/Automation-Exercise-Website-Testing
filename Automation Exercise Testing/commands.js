// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// <reference types="cypress" />

// login_spec.js

Cypress.Commands.add('homepage',(Selector)=>{ 
    cy.visit(Selector.login.url);
    cy.url().should('eq', Selector.login.url);
})

Cypress.Commands.add('loginPage',(Selector)=>{ 
    cy.visit(Selector.login.loginPage);
    cy.get("a[href='/login']").click();

})

Cypress.Commands.add('signup',(Selector)=>{ 
    cy.visit(Selector.login.loginPage);
    cy.get(Selector.login.signupName).type("Madhavan");
    cy.get(Selector.login.signupEmail).type("madhavan.chandar15@gmail.com");
    cy.get(Selector.login.signupButton).click();
    cy.get(Selector.login.genderCheckbox).click();
    cy.get(Selector.login.passwordInput).type("Maddy1509");
    cy.get(Selector.login.daysSelect).select('3').should('have.value', '3');
    cy.get(Selector.login.monthsSelect).select("December").should('have.value', '12');
    cy.get(Selector.login.yearsSelect).select('1996').should('have.value', '1996');
    cy.get(Selector.login.newsletterCheckbox).check().uncheck();
    cy.get(Selector.login.optinCheckbox).check().uncheck();
    cy.get(Selector.login.firstNameInput).type('Madhavan');
    cy.get(Selector.login.lastNameInput).type('Vasavi');
    cy.get(Selector.login.companyInput).type('Augusta');
    cy.get(Selector.login.address1Input).type('gate no:3,A2,rathinam college');
    cy.get(Selector.login.address2Input).type('echanari');
    cy.get(Selector.login.countrySelect).select('India').should('have.value', 'India');
    cy.get(Selector.login.stateInput).type('Tamil nadu');
    cy.get(Selector.login.cityInput).type('Coimbatore');
    cy.get(Selector.login.zipcodeInput).type('641021');
    cy.get(Selector.login.mobileNumberInput).type('7092378801');
    cy.get(Selector.login.createAccountButton).click();
  });


Cypress.Commands.add('login',(Selector)=>{ 
    cy.visit(Selector.login.loginPage);
    cy.get(Selector.login.signupEmail).type("madhavan.chandar15@gmail.com");
    cy.get(Selector.login.signupEmail).should('have.value', 'madhavan.chandar15@gmail.com').should('be.visible');
    cy.get(Selector.login.loginpaswordInput).type("Maddy1509");
    cy.get(Selector.login.loginButton).click();

})

Cypress.Commands.add('productPage',(Selector)=>{ 
    cy.visit(Selector.login.url);
    cy.get("a[href='/products']").click();
    cy.get('#sale_image').should('be.visible');
    cy.get(Selector.products.searchProductInput).type("T-shirt");
    cy.get(Selector.products.submitSearchButton).click();

})

Cypress.Commands.add('cart',(Selector)=>{ 
    cy.visit(Selector.products.productsPage + '?search=t-shirt');
    cy.get("a[href='/product_details/29']").click();
    cy.get(Selector.cart.quantityInput).clear().type('2');
    cy.get("button[type='button']").click();
    cy.get('.modal-title.w-100').should('have.text', 'Added!');
    cy.get('#cartModal > div > div > div.modal-body > p:nth-child(2) > a').click();
    cy.get('.btn.btn-default.check_out').click();

})

Cypress.Commands.add('emailSubscription',(Selector)=>{ 
    cy.visit(Selector.login.url);
    cy.get(Selector.subscribe.subscribeEmailInput).type('madhavan.chandar15@gmail.com');
    cy.get(Selector.subscribe.subscribeButton).click();

})

Cypress.Commands.add('contactUs',(Selector)=>{ 
    cy.visit(Selector.login.url);
    cy.get('a[href="/contact_us"]').click();

})

Cypress.Commands.add('logout',(Selector)=>{ 
    cy.visit(Selector.login.url);
    cy.get(".fa.fa-lock").click();

})

