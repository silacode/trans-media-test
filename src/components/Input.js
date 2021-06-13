import React from "react";

const Input = (props) => {
  return (
    <div className="field">
      <div>
        <label htmlFor={props.label}>{props.label}</label>
      </div>
      <div>
        <input
          id={props.label}
          name={props.type}
          type={props.type}
          value={props.value}
          onChange={props.onInputChange}
          minLength={props.min}
          maxLength={props.max}
          required
        ></input>
      </div>
    </div>
  );
};

export default Input;
