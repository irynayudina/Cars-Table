import React, { useState, useEffect } from "react";
import Input from "../inputs/Input";
import InputCheckbox from "../inputs/InputCheckbox";
import loadCars from "../../utils/loadCars";
import findCarById from "../../utils/findCarById";
import editCar from "../../utils/editCar";

const EditForm = ({ id, cars, setCars, onClose }) => {
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [car, setCar] = useState({
    price: "",
    car_color: "",
    availability: false,
    car: "",
    car_model: "",
    car_vin: "",
    car_model_year: "",
  });

  const loadCar = () => {
    const foundCar = findCarById(cars, id);
    setCar(foundCar);
  };

  useEffect(() => {
    loadCar();
  }, []);

  useEffect(() => {
    if (car && Object.keys(car).length !== 0) {
      setPrice(Number(car.price.replace(/[^0-9.-]+/g, "")));
      setColor(car.car_color);
      setIsAvailable(car.availability);
    }
  }, [car]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCars = editCar(cars, id, color, price, isAvailable);
    sessionStorage.setItem("cars", JSON.stringify(updatedCars));
    setCars(updatedCars);
    onClose();
  };

  return (
    <div className="modal-form-container">
      <h2>Edit car</h2>
      <form onSubmit={handleSubmit}>
        <Input
          idProp="companyEdit"
          placeholderProp="Company..."
          labelProp="Company..."
          valueInp={car?.car}
          disabledProp={true}
        />
        <Input
          idProp="modelEdit"
          placeholderProp="Model..."
          labelProp="Model..."
          valueInp={car?.car_model}
          disabledProp={true}
        />
        <Input
          idProp="vinEdit"
          placeholderProp="VIN..."
          labelProp="VIN..."
          valueInp={car?.car_vin}
          disabledProp={true}
        />
        <Input
          idProp="colorEdit"
          placeholderProp="Color..."
          labelProp="Color..."
          valueInp={color}
          setValueInp={setColor}
          isRequired={true}
        />
        <Input
          typeProp="number"
          idProp="yearEdit"
          placeholderProp="Year..."
          labelProp="Year..."
          valueInp={car?.car_model_year}
          disabledProp={true}
        />
        <Input
          typeProp="number"
          minValue={1}
          idProp="priceEdit"
          placeholderProp="Price..."
          labelProp="Price..."
          valueInp={price}
          setValueInp={setPrice}
          isRequired={true}
        />
        <InputCheckbox
          idProp="availabilityEdit"
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
