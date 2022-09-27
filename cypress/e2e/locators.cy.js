
///<reference types="cypress"/>
it.skip ("Search in google", () => {
    cy.visit ('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');

    //локатор css по назві тегу
    cy.get('nav');
   
    //локатор css по назві атрибуту
    cy.get('[placeholder]');

    //локатор по назві атрибуту зі значенням
    cy.get('[placeholder="Email"]');

    //пошук елемента по id
    cy.get('#query-btn');
    cy.get('[id="query-btn"]');

    //пошук елементу за значенням класу
    cy.get('.btn-default');
    cy.get('[class="btn btn-default"]');
    cy.get('.btn btn-default.btn');

    cy.get('.nav.navbar-nav.pull-right');


//пошук елементу по назві тегу та назві атрибуту
cy.get('input[placeholder]');

//пошук елементу по назві тегу та атрибуту зі значенням
cy.get('input[placeholder="Email"]');

})

it.skip("Вивчення локаторів CSS на Rozetka", () => {
  cy.visit('https://rozetka.com.ua/');

  // пошук елементу за назвою тегу та двома атрибутами
  cy.get('div[class="tile__inner"][data-goods-id="347871891"]');

  // пошук елементу за його дочірніми елементами
  cy.get('rz-sidebar-fat-menu > div > ul > li');
})

it("Вивчення локаторів CSS", () => {
  cy.visit('https://automationteststore.com/');

  // пошук елементу за його дочірніми елементами
  cy.get('#featured div.col-md-3.col-sm-6.col-xs-12');

  // пошук по першій частині значення атрибуту
  cy.get('a[title^="BeneFit"]');

  // пошук по всьому значенню атрибута
  cy.get('a[title*="Girl"]');

  // пошук по останній частині значення атрибуту
  cy.get('a > img[src$=".jpg"]');
  
  // пошук першого елементу серед інших такого ж типу
  cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:first-of-type')

  // пошук першого елементу серед інших такого ж типу
  cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:last-of-type')

  // пошук першого елементу серед інших такого ж типу
  cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:nth-child(4)')
})