import React, { useState } from "react";
import './SearchBar.css'
import filterCars from "../../utils/filterCars";
import loadCars from "../../utils/loadCars";
import Input from "../inputs/Input";
import InputCheckbox from "../inputs/InputCheckbox";

const SearchBar = ({ setCars }) => {
  const [company, setCompany] = useState("")
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [color, setColor] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    loadCars().then((cars) => {
      const filteredCars = filterCars(
        cars,
        company,
        model,
        vin,
        color,
        yearFrom,
        yearTo,
        priceFrom,
        priceTo,
        isAvailable
      );
      setCars(filteredCars);
    });
  };
  const resetSearchBar = () => {
    setCompany("");
    setModel("");
    setVin("");
    setColor("");
    setYearFrom("");
    setYearTo("");
    setPriceFrom("");
    setPriceTo("");
    setIsAvailable(false);
    loadCars().then((cars) => {
      setCars(cars);
    });
  }
  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit}>
        <Input
          idProp="company"
          placeholderProp="Company..."
          labelProp="Company..."
          valueInp={company}
          setValueInp={setCompany}
        />
        <Input
          idProp="model"
          placeholderProp="Model..."
          labelProp="Model..."
          valueInp={model}
          setValueInp={setModel}
        />
        <Input
          idProp="vin"
          placeholderProp="VIN..."
          labelProp="VIN..."
          valueInp={vin}
          setValueInp={setVin}
        />
        <Input
          idProp="color"
          placeholderProp="Color..."
          labelProp="Color..."
          valueInp={color}
          setValueInp={setColor}
        />
        <Input
          typeProp="number"
          idProp="yearFrom"
          placeholderProp="Year from..."
          labelProp="Year from..."
          valueInp={yearFrom}
          setValueInp={setYearFrom}
        />
        <Input
          typeProp="number"
          idProp="yearTo"
          placeholderProp="Year to..."
          labelProp="Year to..."
          valueInp={yearTo}
          setValueInp={setYearTo}
        />
        <Input
          typeProp="number"
          idProp="priceFrom"
          placeholderProp="Price from..."
          labelProp="Price from..."
          valueInp={priceFrom}
          setValueInp={setPriceFrom}
        />
        <Input
          typeProp="number"
          idProp="priceTo"
          placeholderProp="Price to..."
          labelProp="Price to..."
          valueInp={priceTo}
          setValueInp={setPriceTo}
        />
        <InputCheckbox
          idProp="availability"
          labelProp="Availability..."
          isChecked={isAvailable}
          setIsChecked={setIsAvailable}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={resetSearchBar}>Reset</button>
      </form>
    </div>
  );
}

export default SearchBar
