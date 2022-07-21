import React from "react";

import { ReactComponent as GoogleIcon } from "../../assets/google-icon.svg";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) =>
  isGoogleSignIn ? (
    <button className={`is-google-sign-in`} {...otherProps}>
      <GoogleIcon />
    </button>
  ) : (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );

export default CustomButton;
