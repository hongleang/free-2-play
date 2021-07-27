import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--lg'];

const Button = (props) => {
  const {children, type, onClick, buttonStyle, buttonSize} = props;
  // Set default button as btn--primary
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 
  // Set default button size as btn--medium
  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return ( <Link to="/register-form" className="btn-mobile">
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  </Link> );
}
 
export default Button;