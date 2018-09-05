/**
 * @file Sign Up end-to-end tests
 */

describe('Sign Up', () => {
  it('loads Sign up form as expected', () => {
    cy.visit('http://localhost:3000/')
      .get('h3.title').should('contain', 'Sign Up')
      .get('input[name=email]').type('fake@email.com', { delay: 0 })
      .get('input[name=password]').type('fakepassword', { deplay: 0 })
      .get('input[name=passwordConfirm]').type('fakepassword{enter}', { delay: 0 })
  })
})
