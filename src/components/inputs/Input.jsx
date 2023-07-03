import React, {useState, useEffect} from 'react'
import './Input.css'
const Input = ({
  typeProp = "text",
  idProp,
  placeholderProp,
  labelProp,
  valueInp,
  setValueInp,
  disabledProp,
  isRequired,
  minValue,
}) => {
  const [filled, setFilled] = useState("");

  const handleChange = (event) => {
    setValueInp(event.target.value);
    if (event.target.value) {
      setFilled("filled");
    } else {
      setFilled("");
    }
  };

  useEffect(() => {
    if (valueInp === "") {
      setFilled("");
    }
  }, [valueInp]);

  return (
    <div className="input-wrapper">
      <input
        type={typeProp}
        id={idProp}
        placeholder={placeholderProp}
        className={filled}
        value={valueInp}
        onChange={handleChange}
        disabled={disabledProp}
        required={isRequired}
        min={minValue}
      />
      <label htmlFor={idProp}>{labelProp}</label>
    </div>
  );
};

export default Input