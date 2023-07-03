import React from "react";
import "./Input.css";

const InputCheckbox = ({
  idProp,
  labelProp,
  isChecked,
  setIsChecked,
  disabledProp,
}) => {
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={idProp}
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={disabledProp}
      />
      <span>{labelProp}</span>
    </div>
  );
};

export default InputCheckbox;
