import React from "react";

const CheckBox = (props) => {
  return (
    <div>
      <label htmlFor="checkBox">
        {props.label}
        <input id="checkBox" type="checkbox" />
        <span></span>
      </label>
    </div>
  );
};

export default CheckBox;
