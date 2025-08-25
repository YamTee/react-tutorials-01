import React, { Component } from "react";

import Input from "./Input";

class FocusInput extends Component {
  constructor() {
    super();

    this.componentRef = React.createRef();
  }

  focusInput = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />

        <button onClick={this.focusInput}>Click Here</button>
      </div>
    );
  }
}

export default FocusInput;
