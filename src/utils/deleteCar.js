const deleteCar = (cars, id) => {
  return cars.filter((car) => car.id !== id);
};

export default deleteCar;
