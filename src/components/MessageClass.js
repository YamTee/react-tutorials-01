import React, { Component } from "react";

class MessageClass extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello",
      clickedButton: false,
    };
  }

  

  updateMessage() {
    this.setState({
      message: "you clicked the button!",
      clickedButton: true,
    });
  }

  render() {
    return (
      <div>
        <h1> Hello </h1>

        {this.state.clickedButton ? (
          <h2>{this.state.message}</h2>
        ) : (
          <button onClick={() => this.updateMessage()}>Click Here</button>
        )}

        {/* <button onClick={() => this.updateMessage()}>Click Here</button>

        <h2>{this.state.message}</h2> */}
      </div>
    );
  }
}

export default MessageClass;
