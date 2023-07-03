import React, { useState } from "react";
import Input from "../inputs/Input";
import InputCheckbox from "../inputs/InputCheckbox";
const EditForm = () => {
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
  };
  const resetForm = () => {
    setCompany("");
    setModel("");
    setVin("");
    setColor("");
    setYear("");
    setPrice("");
    setIsAvailable(false);
  };
  return (
    <div className="modal-form-container">
      <h2>Edit car</h2>
      <form onSubmit={handleSubmit}>
        <Input
          idProp="companyAdd"
          placeholderProp="Company..."
          labelProp="Company..."
          valueInp={company}
          setValueInp={setCompany}
          disabledProp="true"
        />
        <Input
          idProp="modelAdd"
          placeholderProp="Model..."
          labelProp="Model..."
          valueInp={model}
          setValueInp={setModel}
          disabledProp="true"
        />
        <Input
          idProp="vinAdd"
          placeholderProp="VIN..."
          labelProp="VIN..."
          valueInp={vin}
          setValueInp={setVin}
          disabledProp="true"
        />
        <Input
          idProp="colorAdd"
          placeholderProp="Color..."
          labelProp="Color..."
          valueInp={color}
          setValueInp={setColor}
        />
        <Input
          typeProp="number"
          idProp="yearAdd"
          placeholderProp="Year..."
          labelProp="Year..."
          valueInp={year}
          setValueInp={setYear}
          disabledProp="true"
        />
        <Input
          typeProp="number"
          idProp="priceAdd"
          placeholderProp="Price..."
          labelProp="Price..."
          valueInp={price}
          setValueInp={setPrice}
        />
        <InputCheckbox
          idProp="availability"
          labelProp="Available"
          isChecked={isAvailable}
          setIsChecked={setIsAvailable}
        />
        <button
          type="submit"
          className="add-btn"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
