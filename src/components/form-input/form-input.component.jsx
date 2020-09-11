import React from 'react';
import './form-input.component.scss';
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formInput">
      <input
        className="formInput__input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } formInput__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
