import React, { Component } from 'react'

import Input from '../Input/Input'
import Button from '../Button/Button'

class SignUp extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      console.log('invalid!');
      return;
    }

    console.log('valid!');
  }

  render() {
    return (
      <section className="is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign Up</h3>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" alt="placeholder" />
                </figure>
                <form noValidate onSubmit={this.handleSubmit}>
                  <Input name="email" placeholder="Your Email address" type="email" required />
                  <Input name="password" placeholder="Your password" type="password" required />
                  <Input name="passwordConfirm" placeholder="Confirm password" type="password" required />
                  <Button>Sign Up</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SignUp