const addCar = (cars, company, model, vin, color, year, price, isAvailable) => {
  const latestId = cars.length + 1;
    const newCar = {
        id: latestId, car: company, car_model: model, car_vin: vin, car_color: color, car_model_year: year,
        price: price, availability: isAvailable
    };
  return [newCar, ...cars];
};

export default addCar;