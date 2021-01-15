import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // if the button component has a style, then set the style to it's own style
  // otherwise, set the style to our presets in STYLES array
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button className={`btn ${checkButtonStyle}' ${checkButtonSize}`}>
        {/* renders whatever is passed into call as Button component */}
        {children}
      </button>
    </Link>
  );
};
