import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class NewComponent extends Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      const { count } = this.state;

      return (
        <WrappedComponent count={count} incrementCount={this.incrementCount} />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
