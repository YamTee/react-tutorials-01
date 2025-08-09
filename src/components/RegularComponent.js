import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("RegularComponent rendered");
    return <h1>Regular Component {this.props.value.name}</h1>;
  }
}

export default RegularComponent;
