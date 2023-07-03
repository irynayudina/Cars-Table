import React, { useState, useEffect } from "react";
import "./Table.css";
import Modal from "../modals/Modal";
import EditForm from "../modals/EditForm";
import DeleteForm from "../modals/DeleteForm";

const Table = ({ cars }) => {
  const portionSize = 10;
  const [pageNum, setPageNum] = useState(portionSize);
  const [displayCars, setDisplayCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    const loadMore = () => {
    setIsLoading(true);
    const carsPortion = cars.slice(pageNum, pageNum + portionSize);
    setDisplayCars([...displayCars, ...carsPortion]);
    setPageNum((prev) => prev + portionSize);
  };

  useEffect(() => {
    setIsLoading(true);
    setDisplayCars(cars.slice(0, 0 + portionSize));
  }, [cars]);
    
  useEffect(() => {
    setIsLoading(false);
  }, [displayCars]);

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
                <td>
                  <Modal>
                    <span className="action">-Edit</span>
                    <EditForm />
                  </Modal>
                  <Modal>
                    <span className="action">-Delete</span>
                    <DeleteForm />
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="load-more" onClick={loadMore} disabled={isLoading}>
          Load more
        </button>
      </div>
    );
};

export default Table;
