import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = ({ cars }) => {
  const portionSize = 10;
  const [pageNum, setPageNum] = useState(10);
  const [displayCars, setDisplayCars] = useState([]);

  const loadMore = () => {
    const carsPortion = cars.slice(pageNum, pageNum + portionSize);
    setDisplayCars([...displayCars, ...carsPortion]);
    setPageNum((prev) => prev + portionSize);
  };

  useEffect(() => {
    setDisplayCars(cars.slice(0, 0 + portionSize));
  }, [cars]);

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Model</th>
              <th>VIN</th>
              <th>Color</th>
              <th>Year</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayCars?.map((car) => (
              <tr key={car.id}>
                <td>{car.car}</td>
                <td>{car.car_model}</td>
                <td>{car.car_vin}</td>
                <td className="color-car">
                  <div
                    className="color-cirle"
                    style={{ backgroundColor: `${car.car_color}` }}
                  ></div>
                  {car.car_color}
                </td>
                <td>{car.car_model_year}</td>
                <td>{car.price}</td>
                <td>{car.availability.toString()}</td>
                <td>-Edit -Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="load-more" onClick={loadMore}>
          Load more
        </button>
      </div>
    );
};

export default Table;
