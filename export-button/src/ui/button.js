import React, { Component } from 'react'
import PropTypes from 'prop-types';

/**
 * @description styled button component
 * 
 * @example
 * <Button text="Example button text" buttonColor="red" buttonHoverColor="green" />
 */

class Button extends Component {
  constructor(props) {
    super(props)

    this.state={
      hover: false,
      text: this.props.text
    }

    this.toggleHover = this.toggleHover.bind(this)
    this.showAlert = this.showAlert.bind(this)
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  showAlert() {
    alert("Button clicked");
    this.setState({text: "Button clicked"})
  }


  render() {
    let style = {
      width: "18%",
      height:"40px",
      display: "inline-block",
      fontFamily: "Apple",
      boxShadow: "4px 5px 5px #888888",
      backgroundColor: this.state.hover ? this.props.buttonHoverColor : this.props.buttonColor
    }
    return (
      <button style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.showAlert}>{this.state.text}</button>
    )
  }

}

Button.propTypes = {
  /**
   * @property {propTypes.string} text - The text to be shown in the Button.
   */
  text: PropTypes.string,
  /**
   * @property {propTypes.string} buttonHoverColor - The text to be shown in the Button.
   */
  buttonHoverColor: PropTypes.string,
  /**
   * @property {propTypes.string} buttonColor- The text to be shown in the Button.
   */
  buttonColor: PropTypes.string
}

Button.defaultProps = {
  text: 'Example Button',
  buttonColor: "rgb(119, 148, 162)",
  buttonHoverColor: "rgba(161, 188, 202, 0.34)"
}

export default Button;
