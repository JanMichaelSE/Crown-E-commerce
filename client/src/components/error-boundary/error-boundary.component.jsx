import React, { Component } from 'react';

import './error-boundary.component.scss';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrord: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrord: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrord) {
      return (
        <div className="error-image-overlay">
          <div className="error-image-container"></div>
          <h2 className="error-text">This Page is Broken</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
