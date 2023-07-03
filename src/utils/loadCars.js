import axios from "axios";
import fetchedCars from "../data/cars.json";

const fetchCars = async () => {
  try {
    const response = await axios.get("https://myfakeapi.com/api/cars/");
    if (response.status === 200 && response.data?.cars) {
      const carObject = response.data?.cars[0];
      if (
        carObject &&
        carObject.hasOwnProperty("availability") &&
        carObject.hasOwnProperty("car") &&
        carObject.hasOwnProperty("car_color") &&
        carObject.hasOwnProperty("car_model") &&
        carObject.hasOwnProperty("car_model_year") &&
        carObject.hasOwnProperty("car_vin") &&
        carObject.hasOwnProperty("id") &&
        carObject.hasOwnProperty("price")
      ) {
        return response.data.cars;
      } else {
        console.log("Object is not in the correct format");
      }
    } else {
      console.log("Error: Invalid response from API");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return null;
};

const loadCars = async () => {
  if (sessionStorage.getItem("cars") === null) {
    console.log("Fetching example data");
    let cars = await fetchCars();
    if (!cars) {
      console.log("Error while fetching example data");
      cars = fetchedCars;
    }
    sessionStorage.setItem("cars", JSON.stringify(cars));
    return cars;
  } else {
    console.log("Using stored data");
    return JSON.parse(sessionStorage.getItem("cars"));
  }
};

export default loadCars;
