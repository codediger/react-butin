import React, { Component } from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.button = {
      display: 'inline-block',
      borderRadius: '3px',
      padding: '0.5rem 0',
      margin: '0.5rem 1rem',
      width: '11rem',
      border: '2px solid white',
      background: 'black',
      color: 'white'
    }
  }
  
  componentWillMount() {
    if (this.props.background) this.button.background = this.props.background;
    if (this.props.color) this.button.color = this.props.color;
    if (this.props.border) this.button.border = this.props.border;
  }

  render() {
    return <button style={this.button}>{this.props.buttonName}</button>
  }
}

export default Button;