import React from 'react'
import { shallow } from 'enzyme'

import Input from './Input'

describe('Input', () => {
  it('should render the A component', () => {
    const wrapper = shallow(<Input value="some text" />)

    expect(wrapper).toMatchSnapshot()
  })
})