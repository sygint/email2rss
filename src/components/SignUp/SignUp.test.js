import React from 'react'
import { render } from 'enzyme'

import SignUp from './SignUp'

describe('index', () => {
  it('should render the index page', () => {
    const wrapper = render(<SignUp />)

    expect(wrapper).toMatchSnapshot()
  })
})