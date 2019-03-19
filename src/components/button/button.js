import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ buttonText, disabled, onClick }) => (
  <button
    type="button"
    className="button__base"
    onClick={onClick}
    disabled={disabled}
  >
    {buttonText}
  </button>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
