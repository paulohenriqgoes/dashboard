// https://docs.cypress.io/api/introduction/api.html
const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('should render modal register when click on cta create account on header', () => {
    cy.visit(APP_URL)
    cy.get('#cta-create-account').click()
    cy.get('#modal-create-account')
  })

  it('should render modal register when click on cta create account on banner', () => {
    cy.visit(APP_URL)
    cy.get('#cta-create-account-2').click()
    cy.get('#modal-create-account')
  })

  it('should render modal login when click on cta ', () => {
    cy.visit(APP_URL)
    cy.get('#cta-login').click()
    cy.get('#modal-login')
  })

  it('should authenticate with email and passoword ', () => {
    cy.visit(APP_URL)
    cy.get('#cta-login').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
  })

  it('should show an error on invalid email', () => {
    cy.visit(APP_URL)
    cy.get('#cta-login').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igor@')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.get('#email-error')
  })

  it('should logout work correctly', () => {
    cy.visit(APP_URL)
    cy.get('#cta-login').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')

    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
