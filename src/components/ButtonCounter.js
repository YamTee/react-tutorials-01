import React, { Component } from "react";

import withCounter from "./withCounter";

class ButtonCounter extends Component {
  constructor() {
    super();
  }

  render() {
    const { count, incrementCount } = this.props;

    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default withCounter(ButtonCounter);
