/// <reference types="cypress" />

import {categories, famousQuotes, awesomeQuotes} from '../../fixtures/data';


const enterButton = 'Enter';
const submitButton = 'Submit';
const checkbox = '[id="isRobot"]';
const pageBody = '[class="App-body"]';
const inputField = '[id="code"]';
const secretElement = '[name="secret"]';
const totalScoreElement = '[id="summary"]';
const score = '[class="score"]';

describe('salsita qa homework', () => {

  before(() => {
    cy.visit('https://salsita-qa-homework.netlify.app/')
  });

  it('enter the page, access to the lists page and verify quote categories', () => {

    cy.log ('enter the system')
    cy.contains(enterButton).click();
    //To make sure the page has loaded successfully, we can assert any element to be visible. 
    cy.get(pageBody, {
      timeout: 5000
    }).should('be.visible')

    cy.log ('submit the access to the lists page');
    cy.get(secretElement).invoke('val').as('secretValue');
    cy.get('@secretValue').then((secretValue) => {
      cy.get(inputField).click().type(secretValue);
    });
    cy.get(checkbox).click()
    cy.contains(submitButton).click();
    
    cy.log ('verify that all the categories and their quotes are visible');
    cy.AssertQuoteIsVisible(categories.FamousCategory);
    cy.AssertQuoteIsVisible(famousQuotes.PeopleQuote);
    cy.AssertQuoteIsVisible(famousQuotes.ClassicQuote);
    cy.AssertQuoteIsVisible(famousQuotes.BugQuote);
    cy.AssertQuoteIsVisible(famousQuotes.HorseQuote);
    cy.AssertQuoteIsVisible(famousQuotes.SeriousQuote);
    
    cy.AssertQuoteIsVisible(categories.AwesomeCategory);
    cy.AssertQuoteIsVisible(awesomeQuotes.HabitsQuote);
    cy.AssertQuoteIsVisible(awesomeQuotes.ButterfliesQuote);
    cy.AssertQuoteIsVisible(awesomeQuotes.TimeQuote);
    cy.AssertQuoteIsVisible(awesomeQuotes.UnusualQuote);
    cy.AssertQuoteIsVisible(awesomeQuotes.DeadlineQuote);

    cy.log ('no cases of extra quotes and no missing ones')
    Object.keys(famousQuotes).length;
    Object.keys(awesomeQuotes).length;
    const combinedLenght = parseInt(Object.keys(famousQuotes).length)+parseInt(Object.keys(awesomeQuotes).length)
    cy.get('li').should('have.length',combinedLenght)


    cy.log ('verify that the total score is the sum of all quote scores')
    let combinedValue = 0 
    cy.get(totalScoreElement).invoke('text').as('totalScoreValue')

    cy.get(score).each((individualScore) => {
      cy.wrap(individualScore).then(($text) => {const getText = $text.text()
        const toNumber = parseInt(getText)
        combinedValue = combinedValue + toNumber
      });
      }).then(() => {
        cy.get(totalScoreElement).then(($text) => {const getText = $text.text()
          var partsArray = getText.split(':');
          const toNumber = parseInt(partsArray[1], 10)
          expect(toNumber).equal(combinedValue);
        });
    });
  });
});
