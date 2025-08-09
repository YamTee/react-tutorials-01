import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("pure component rendered");
    return <h1>Pure Component {this.props.value.name}</h1>;
  }
}

export default PureComp;
