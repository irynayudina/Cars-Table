const editCar = (cars, id, newColor, newPrice, newAvailability) => {
  return cars.map((car) => {
    if (car.id === id) {
      return {
        ...car,
        car_color: newColor !== undefined ? newColor : car.car_color,
        price: newPrice !== undefined ? `$${newPrice}` : car.price,
        availability:
          newAvailability !== undefined ? newAvailability : car.availability,
      };
    }
    return car;
  });
};

export default editCar;
