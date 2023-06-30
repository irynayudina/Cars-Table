import axios from "axios";
import fetchedCars from "../data/cars.json";

const fetchCars = async () => {
  try {
    const response = await axios.get("https://myfakeapi.com/api/cars/");
    if (response.status === 200 && response.data?.cars) {
      return response.data.cars;
    } else {
      console.log("Error: Invalid response from API");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  return null;
};

const loadCars = async () => {
  if (sessionStorage.length === 0) {
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
