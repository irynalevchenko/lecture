///<reference types="cypress"/>
it ("First home work", () => {
    cy.viewport(1550, 1500)
    cy.visit ('https://sanitarskyi-ngx-admin.herokuapp.com');
    
 
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('a.ng-tns-c141-9').click(); // що означає 'a' на початку? Cypress підказав, що так можна, але не розумію, що це за правило.
    cy.get('a.ng-tns-c141-11').click();
    
    //inline form
    cy.get('[placeholder="Jane Doe"]');
    cy.get('.form-inline > [placeholder="Email"]'); //що означає form-inline. Cypress підказав
    cy.get('[class="label"]').first(); //так собі рішення. Має бути якийсь унікальний ідентифікатор. Бо спочатку шукає всі, а потім перший елемент.
    cy.get('.form-inline > .appearance-filled'); //взагалі дічь. кнопка Submit. На сторінці таких два елеименти.

    //Using the Grid   
    cy.get('#inputEmail1'); 
    cy.get('#inputPassword2'); 
    cy.get('nb-radio-group > :nth-child(1) > label'); //Cypress підказав. Як формуються такі локатори?
    cy.get('nb-radio-group > :nth-child(2) > label'); 
    cy.get('[ng-reflect-disabled=""] > label');
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body > .ng-untouched > :nth-child(4) > .offset-sm-3 > .appearance-filled');// кнопка Sign in. 

    //Basic form  
    cy.get('#exampleInputEmail1');
    cy.get('#exampleInputPassword1'); 
    cy.get(':nth-child(3) > .status-basic > .label > .custom-checkbox'); 
    cy.get('[class="appearance-filled size-medium shape-rectangle status-danger nb-transition"]');// кнопка Submit

    //Form without labels  
    cy.get('[placeholder="Recipients"]'); //прив'язуватись до значень це не найкраща практика. Як можна інакше?
    cy.get('[placeholder="Subject"]'); 
    cy.get('[placeholder="Message"]'); 
    cy.get('[class="status-success appearance-filled size-medium shape-rectangle nb-transition"]');// кнопка Send

    //Block Form
    cy.get('#inputFirstName'); 
    cy.get('#inputLastName'); 
    cy.get('#inputEmail'); 
    cy.get('#inputWebsite'); 
    cy.get('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]');// кнопка Submit

    //Horizontal form
    cy.get('#inputEmail3'); 
    cy.get('#inputPassword3'); 
    cy.get('.checkbox > .status-basic > .label > .custom-checkbox'); 
    cy.get('[class="appearance-filled size-medium shape-rectangle status-warning nb-transition"]');// кнопка Sign in

})