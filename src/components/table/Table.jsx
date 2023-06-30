import React from 'react'
import './Table.css'
const Table = ({cars}) => {
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
          {cars?.map((car) => (
            <tr key={car.id}>
              <td>{car.car}</td>
              <td>{car.car_model}</td>
              <td>{car.car_vin}</td>
              <td className='color-car'>
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
    </div>
  );
}

export default Table