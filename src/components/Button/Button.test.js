import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  it('should render the Button component', () => {
    const wrapper = shallow(<Button>click me</Button>)

    expect(wrapper).toMatchSnapshot()
  })
})