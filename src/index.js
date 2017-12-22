import React from 'react';

/**
 * The simplest way to define a component is to write a JavaScript function.
 * 
 * So, we'll create a Javascript Function and name it "Button"
 */
function Button(props) {
  return (
    <button style={props}>{props.buttonName}</button>
  )
}

/**
 * Here we define the default properties for our React button component.
 * It's just CSS.
 */
Button.defaultProps = {
  display: 'inline-block',
  borderRadius: '3px',
  padding: '0.5rem 0',
  margin: '0.5rem 1rem',
  width: '11rem',
  border: '2px solid white',
  background: 'black',
  color: 'white'
}

export default Button;