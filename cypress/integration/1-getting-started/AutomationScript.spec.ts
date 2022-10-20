/// <reference types="cypress" />
require('cypress-xpath')
// import { getMaxListeners } from "process"



describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://app.vwo.com')
  })

  it('Check that on landing page you can view “start a free trial', () => {
    let x= Math.floor(Math.random()*100)+1
    let email = 'vijayasanti.alaparthy'+x+'@getMaxListeners.com'
     cy.get('[data-qa="bericafeqo"]').click()
  })

  it('Account with this email already exist or not', () => {
    cy.get('[data-qa="bericafeqo"]').click()
    cy.get('[data-qa="page-su-step1-v1-email"]').type('vijayasanti.alaparthy@apexon.com')
    cy.get('[data-qa="page-su-submit"]').first().click()    
    cy.wait(2000)
    cy.get('[class="C($color-red) Fz($font-size-12) Trsp($Op) Trsdu(0.15s) Op(0) invalid-input+Op(1) invalid-reason"]').contains('An account with this email already exists.',{matchCase:false})
    
  })

  it('Verify that you land on dashboard by checking that following items exist on left side navigation bar:', () => {
    cy.get('[data-qa="hocewoqisi"]').type('vijayasanti.alaparthy@apexon.com')
    cy.get('[data-qa="jobodapuxe"]').type('Test@123')
    cy.get('[data-qa="ezazsuguuy"]').click()
    
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Testing")]').should('have.text','Testing')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Insights")]').should('have.text','Insights')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Personalize")]').should('have.text','Personalize')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Deploy")]').should('have.text','Deploy')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Data360")]').should('have.text','Data360')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Plan")]').should('have.text','Plan')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Configurations")]').should('have.text','Configurations')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Services")]').should('have.text','Services')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Updates")]').should('have.text','Updates')
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Plan")]').click()
    cy.xpath('//*[@data-qa="nav-label"][contains(text(),"Hypotheses")]').click()
    cy.wait(20000)
    createHypothesis()
    cy.wait(1000)
    createHypothesis()
    cy.wait(1000)
    createHypothesis()
    cy.wait(1000)
    validationOfFilter()

  })

  function createHypothesis(){
    let x= Math.floor(Math.random()*100)+1
    let labelval= 'Automation_'+x;
    let y = Math.floor(Math.random() * 5)
    let expectval='What is the solution to the problem_'+x
    let addressval='What problem you are trying  to the problem_'+x
    cy.get('[data-qa="btn-create"]').click()
    cy.wait(2000)
    cy.get('[placeholder="E.g. Homepage"]').last().scrollIntoView()
    cy.get('[placeholder="E.g. Homepage"]').last().type(labelval)

    cy.get('[id="create-hypothesis-solution"]').focus()
    cy.get('[id="create-hypothesis-solution"]').type(expectval)
    cy.wait(2000)
    cy.get('[id="create-hypothesis-problem"]').focus()
    cy.get('[id="create-hypothesis-problem"]').type(addressval)
    cy.get('[name="ease"]>li').eq(y).click()
    cy.wait(2000)
    cy.get('[name="importance"]>li').eq(y).click()
    cy.wait(2000)
    cy.get('[name="potential"]>li').eq(y).click()
    cy.wait(2000)
    cy.get('[type="submit"]').last().click()
    cy.wait(2000)
  }
  function validationOfFilter(){
    cy.get('[data-qa="hypothesis-list-view"]').click()
    cy.wait(2000)
    cy.get('[class="select-box-selected ng-binding ng-scope ellipsis"]').click()

    cy.get('[class="select-box-selected ng-binding ng-scope ellipsis"]').first().click()
    cy.wait(2000)
    cy.get('[class="select-box-selected ng-binding ng-scope ellipsis"]').click()
    cy.wait(2000)
    cy.get('[class="select-box-selected ng-binding ng-scope ellipsis"]').last().click()
    cy.wait(2000)
    cy.get('[class="select-box-selected ng-binding ng-scope ellipsis"]').click()
    cy.wait(2000)
    // cy.get('[class="select-box-selected ng-binding ng-scope ellipsis"]').eq(1).click()
    cy.wait(7000)
    cy.get('[data-qa="cekonezefo"]').first().click()
    cy.wait(2000)
    // cy.get('[data-qa="yevususofo"]').first().click()
    cy.wait(2000)
    cy.get('[data-qa="bofogifune"]').click()
    cy.wait(2000)
  }
})
   
 
