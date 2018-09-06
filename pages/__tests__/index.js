import React from 'react'
import { render } from 'enzyme'

import Index from '../index'

describe('index', () => {
  it('should render the index page', () => {
    const wrapper = render(<Index />)

    expect(wrapper).toMatchSnapshot()
  })
})