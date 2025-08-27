import React, { Component } from "react";

import withCounter from "./withCounter";

class HoverCounter extends Component {
  constructor() {
    super();
  }

  render() {
    const { count, incrementCount } = this.props;

    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>;
  }
}

export default withCounter(HoverCounter);
