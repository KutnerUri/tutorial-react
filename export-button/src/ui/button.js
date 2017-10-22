import React, { Component } from 'react'

/**
 * @description styled button component
 *
 *
 */

class Button extends Component {
  constructor(props) {
    super(props)

    this.state={hover: false}

    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  showAlert() {
    alert("Button clicked");
  }


  render() {
    let style = {
      width: "18%",
      height:"40px",
      display: "inline-block",
      fontFamily: "Apple",
      boxShadow: "4px 5px 5px #888888",
      backgroundColor: this.state.hover ? "rgb(119, 148, 162)" : "rgba(161, 188, 202, 0.34)"
    }
    return (
      <button style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.showAlert}>Example Button</button>
    )
  }

}

export default Button;
