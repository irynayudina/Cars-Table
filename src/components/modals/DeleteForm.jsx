import React, {useState, useEffect} from "react";
import Input from "../inputs/Input";
import InputCheckbox from "../inputs/InputCheckbox";
import deleteCar from "../../utils/deleteCar";
import findCarById from "../../utils/findCarById";

const DeleteForm = ({ cars, setCars, id, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCars = deleteCar(cars, id);
    sessionStorage.setItem("cars", JSON.stringify(updatedCars));
    setCars(updatedCars);
    onClose();
  };

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

  return (
    <div className="modal-form-container">
      <h2>Are you sure you want to delete this car?</h2>
      <form onSubmit={handleSubmit}>
        <Input
          idProp="companyDelete"
          placeholderProp="Company..."
          labelProp="Company..."
          valueInp={car.car}
          disabledProp={true}
        />
        <Input
          idProp="modelDelete"
          placeholderProp="Model..."
          labelProp="Model..."
          valueInp={car.car_model}
          disabledProp={true}
        />
        <Input
          idProp="vinDelete"
          placeholderProp="VIN..."
          labelProp="VIN..."
          valueInp={car.car_vin}
          disabledProp={true}
        />
        <Input
          idProp="colorDelete"
          placeholderProp="Color..."
          labelProp="Color..."
          valueInp={car.car_color}
          disabledProp={true}
        />
        <Input
          typeProp="number"
          idProp="yearDelete"
          placeholderProp="Year..."
          labelProp="Year..."
          valueInp={car.car_model_year}
          disabledProp={true}
        />
        <Input
          idProp="priceDelete"
          placeholderProp="Price..."
          labelProp="Price..."
          valueInp={car.price}
          disabledProp={true}
        />
        <InputCheckbox
          idProp="availabilityDelete"
          labelProp="Available"
          isChecked={car.availability}
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
