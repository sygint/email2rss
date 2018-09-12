/**
 * @file Sign Up end-to-end tests
 */

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/sign-up')
  })

  it('should be Sign Up page', () => {
    cy.get('.title').contains('Sign Up')
  })

  it(`should display 'already registered'`, () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name=email]').type('fake@email.com', { delay: 0 })
    cy.get('input[name=password]').type('fakepassword', { deplay: 0 })
    cy.get('input[name=passwordConfirm]').type('fakepassword{enter}', { delay: 0 })

    cy.get('.error').should('be.visible').and('contain', 'already exists')

    cy.url().should('include', '/sign-up')
  })
})
