import React from "react";

const Button = (props) => {
  return (
    <div>
      <input className="button" type="submit" value={props.name} />
    </div>
  );
};

export default Button;
