import React, {useState} from 'react'
import Input from '../inputs/Input';
import InputCheckbox from '../inputs/InputCheckbox';
import addCar from '../../utils/addCar';

const AddForm = ({ cars, setCars, onClose }) => {
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
    const updatedCars = addCar(
      cars,
      company,
      model,
      vin,
      color,
      year,
      price,
      isAvailable
    );
    sessionStorage.setItem("cars", JSON.stringify(updatedCars));
    setCars(updatedCars);
    onClose(); 
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
      <h2>Add a new car</h2>
      <form onSubmit={handleSubmit}>
        <Input
          idProp="companyAdd"
          placeholderProp="Company..."
          labelProp="Company..."
          valueInp={company}
          setValueInp={setCompany}
          isRequired={true}
        />
        <Input
          idProp="modelAdd"
          placeholderProp="Model..."
          labelProp="Model..."
          valueInp={model}
          setValueInp={setModel}
          isRequired={true}
        />
        <Input
          idProp="vinAdd"
          placeholderProp="VIN..."
          labelProp="VIN..."
          valueInp={vin}
          setValueInp={setVin}
          isRequired={true}
        />
        <Input
          idProp="colorAdd"
          placeholderProp="Color..."
          labelProp="Color..."
          valueInp={color}
          setValueInp={setColor}
          isRequired={true}
        />
        <Input
          typeProp="number"
          minValue={1}
          idProp="yearAdd"
          placeholderProp="Year..."
          labelProp="Year..."
          valueInp={year}
          setValueInp={setYear}
          isRequired={true}
        />
        <Input
          typeProp="number"
          minValue={1}
          idProp="priceAdd"
          placeholderProp="Price..."
          labelProp="Price..."
          valueInp={price}
          setValueInp={setPrice}
          isRequired={true}
        />
        <InputCheckbox
          idProp="availabilityAdd"
          labelProp="Available"
          isChecked={isAvailable}
          setIsChecked={setIsAvailable}
        />
        <button
          type="submit"
          className="add-btn"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm