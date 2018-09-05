/**
 * @file Input component
 */

import React from 'react'

const Input = (props) => (
  <div className="field">
    <div className="control">
      <input className="input is-large" {...props} />
    </div>
  </div>
)

Input.defaultProps = {
  placeholder: null,
  type: 'text'
}

export default Input