/**
 * @file Button component
 */

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => (
  <button type="button" className="button is-block is-info is-large is-fullwidth">{children}</button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button