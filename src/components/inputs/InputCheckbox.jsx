import React from "react";
import "./Input.css";

const InputCheckbox = ({ idProp, labelProp, isChecked, setIsChecked }) => {
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
      />
      <span>{labelProp}</span>
    </div>
  );
};

export default InputCheckbox;
