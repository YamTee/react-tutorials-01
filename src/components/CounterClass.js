import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("from call back :" + this.state.count);
      }
    );

    console.log(this.state.count);
  }

  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <h1> Count : {this.state.count} </h1>

        <button onClick={this.incrementFive.bind(this)}>Increment Count</button>
      </div>
    );
  }
}

export default CounterClass;
