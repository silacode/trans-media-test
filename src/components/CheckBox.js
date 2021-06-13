import React from "react";

const CheckBox = (props) => {
  return (
    <div>
      <label className="check-box" htmlFor="checkBox">
        {props.label}
        <input id="checkBox" type="checkbox" />
        <span className="check-box-control"></span>
      </label>
    </div>
  );
};

export default CheckBox;
