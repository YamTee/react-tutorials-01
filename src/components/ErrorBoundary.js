import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    return this.state.hasError ? (
      <div>There is something wrong</div>
    ) : (
      <div>{this.props.children}</div>
    );
  }
}

export default ErrorBoundary;
