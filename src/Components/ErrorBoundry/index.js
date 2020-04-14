import React from "react";

class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  render() {
    return this.state.error ? <div className={"error"} /> : this.props.children;
  }
}

export default ErrorBoundry;
