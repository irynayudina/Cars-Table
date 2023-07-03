import React from "react";
import Input from "../inputs/Input";
import InputCheckbox from "../inputs/InputCheckbox";

const DeleteForm = ({ id }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="modal-form-container">
      <h2>Are you sure you want to delete this car?</h2>
      <form onSubmit={handleSubmit}>
        <Input
          idProp="companyAdd"
          placeholderProp="Company..."
          labelProp="Company..."
          // valueInp={company}
          // setValueInp={setCompany}
          disabledProp={true}
        />
        <Input
          idProp="modelAdd"
          placeholderProp="Model..."
          labelProp="Model..."
          // valueInp={model}
          // setValueInp={setModel}
          disabledProp={true}
        />
        <Input
          idProp="vinAdd"
          placeholderProp="VIN..."
          labelProp="VIN..."
          // valueInp={vin}
          // setValueInp={setVin}
          disabledProp={true}
        />
        <Input
          idProp="colorAdd"
          placeholderProp="Color..."
          labelProp="Color..."
          // valueInp={color}
          // setValueInp={setColor}
          disabledProp={true}
        />
        <Input
          typeProp="number"
          idProp="yearAdd"
          placeholderProp="Year..."
          labelProp="Year..."
          // valueInp={year}
          // setValueInp={setYear}
          disabledProp={true}
        />
        <Input
          typeProp="number"
          idProp="priceAdd"
          placeholderProp="Price..."
          labelProp="Price..."
          // valueInp={price}
          // setValueInp={setPrice}
          disabledProp={true}
        />
        <InputCheckbox
          idProp="availability"
          labelProp="Available"
          // isChecked={isAvailable}
          // setIsChecked={setIsAvailable}
          disabledProp={true}
        />
        <button
          type="submit"
          className="del-btn"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          Yes, delete
        </button>
      </form>
    </div>
  );
};

export default DeleteForm;
