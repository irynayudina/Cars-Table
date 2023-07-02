const filterCars = (
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
) => {
  const filteredCars = cars.filter((car) => {
    let isMatch = true;

    if (company) {
      if (String(car.car).toLowerCase() !== String(company).toLowerCase()) {
        isMatch = false;
      }
    }

    if (model) {
      if (String(car.car_model).toLowerCase() !== String(model).toLowerCase()) {
        isMatch = false;
      }
    }

    if (vin) {
      if (String(car.car_vin).toLowerCase() !== String(vin).toLowerCase()) {
        isMatch = false;
      }
    }

    if (color) {
      if (String(car.car_color).toLowerCase() !== String(color).toLowerCase()) {
        isMatch = false;
      }
    }

    if (yearFrom) {
      try {
        if (Number(car.car_model_year) < Number(yearFrom)) {
          isMatch = false;
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (yearTo) {
      try {
        if (Number(car.car_model_year) > Number(yearTo)) {
          isMatch = false;
        }
      } catch (err) {
        console.error(err);
      }
    }
    
    if (priceFrom) {
      try {
        if (Number(car.price.replace(/[^0-9.-]+/g,"")) < parseFloat(priceFrom)) {
          isMatch = false;
        }
      } catch (error) {
        console.error(err);
      }
    }
    if (priceTo) {
      try {
        if (Number(car.price.replace(/[^0-9.-]+/g, "")) > parseFloat(priceTo)) {
          isMatch = false;
        }
      } catch (error) {
        console.error(err);
      }
    }

    // car.availability.toString() - isAvailable.toString()
    if (isAvailable && !car.availability) {
      isMatch = false;
    }

    return isMatch;
  });

  return filteredCars;
};

export default filterCars;
