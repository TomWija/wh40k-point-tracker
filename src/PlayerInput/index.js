import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const PlayerInput = ({id, type = "text", label, onChange, value, className}) => {

  return (
    <div className={`PlayerInput ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={ type }
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number"]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default PlayerInput;