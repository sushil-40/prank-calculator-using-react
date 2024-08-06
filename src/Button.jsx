/* eslint-disable react/prop-types */
import React from "react";

export const Button = ({
  cls,
  label,
  handleOnButtonClick,
  handleOnMouseDown,
  btnStyle,
}) => {
  return (
    <div
      style={btnStyle}
      onMouseDown={() => handleOnMouseDown(label)}
      onClick={() => handleOnButtonClick(label)}
      className={"btn " + cls}
    >
      {label}
    </div>
  );
};
