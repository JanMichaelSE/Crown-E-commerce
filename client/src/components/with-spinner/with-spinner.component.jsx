import React, { Fragment } from 'react';

import './with-spinner.component.scss';

const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return (
      <Fragment>
        {isLoading ? (
          <div className="spinner-overlay">
            <div className="spinner-container"></div>
          </div>
        ) : (
          <WrapperComponent {...otherProps} />
        )}
      </Fragment>
    );
  };
  return Spinner;
};

export default WithSpinner;
