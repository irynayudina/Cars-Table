import React from "react";

const InputCheckbox = ({ idProp, labelProp, isChecked, setIsChecked }) => {
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div class="checkbox-wrapper">
      <input
        type="checkbox"
        id={idProp}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={idProp}>{labelProp}</label>
    </div>
  );
};

export default InputCheckbox;
