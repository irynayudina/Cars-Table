const findCarById = (cars, id) => {
    return cars.find((car) => car.id === id);
};
export default findCarById