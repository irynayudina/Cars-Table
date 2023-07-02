import React, { useState } from "react";
import './SearchBar.css'
import Input from "../inputs/Input";
import InputCheckbox from "../inputs/InputCheckbox";

const SearchBar = () => {
  const [company, setCompany] = useState("")
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
    
  const handleSubmit = (event) => {
    // event.preventDefault();
  };
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
          idProp="year"
          placeholderProp="Year..."
          labelProp="Year..."
          valueInp={year}
          setValueInp={setYear}
        />
        <Input
          typeProp="number"
          idProp="price"
          placeholderProp="Price..."
          labelProp="Price..."
          valueInp={price}
          setValueInp={setPrice}
        />
        <InputCheckbox
          idProp="availability"
          labelProp="Availability..."
          isChecked={isAvailable}
          setIsChecked={setIsAvailable}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar

