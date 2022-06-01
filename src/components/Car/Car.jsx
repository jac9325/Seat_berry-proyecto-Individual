import React from 'react';
import './__Car.scss';
import UpdateCar from './UpdateCar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import CreateRent from '../CarRent/CreateRent.jsx';
import {
  deleteCarAsync,
  getAllCarsAsync,
  carToUpdate,
  hideModaltoUpdate,
  selectModalToUpdate,
} from '../../slices/carSlices.js';

import {
  rentToCreate,
  hideModaltoCreate,
  selectModalToCreate,
} from '../../slices/carRentSlices.js';

const Car = (car) => {
  const dispath = useDispatch();
  const showModalToUpdate = useSelector(selectModalToUpdate);
  const showModalToCreateRent = useSelector(selectModalToCreate);

  const rentCreate = async (car) => {
    dispath(rentToCreate(car));
  };

  const updateCar = async (car) => {
    dispath(carToUpdate(car));
  };

  const deleteCar = async (id) => {
    await dispath(deleteCarAsync(id));
    dispath(getAllCarsAsync());
  };

  return (
    <div className="card ms-3 mb-2 mt-2">
      <img src={car.image} className="card-img-top" alt="car" />
      <div className="card-body">
        <h6 className="card-title text-start ms-3">{car.category}</h6>
        <h4 className="card-title text-start ms-3">
          {car.mark} - {car.model}
        </h4>
        <div className="car-equipments clearfix d-flex justify-content-around mt-4 mb-4">
          <div className="d-flex flex-column text-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
            </span>
            <span className="mt-2 text-black">{car.seats}</span>
          </div>

          <div className="d-flex flex-column text-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bezier2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                />
              </svg>
            </span>
            <span className="mt-2">{car.type}</span>
          </div>

          <div className="d-flex flex-column text-center">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </span>
            <span className="mt-2">{car.year}</span>
          </div>
        </div>
        <div className="d-flex justify-content-start align-middle ms-3">
          <p>{car.description}</p>
        </div>
        <div className="d-flex justify-content-around">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={() => updateCar(car)}
          >
            Edit
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={() => deleteCar(car._id)}
          >
            Delete
          </button>
        </div>
        <div className="d-flex justify-content-around">
          <button
            type="submit"
            className="btn btn-danger mb-3"
            onClick={() => rentCreate(car)}
          >
            put up for rent
          </button>
        </div>
      </div>
      <UpdateCar
        show={showModalToUpdate}
        handleHide={() => dispath(hideModaltoUpdate())}
      />
      <CreateRent
        show={showModalToCreateRent}
        handleHide={() => dispath(hideModaltoCreate())}
      />
    </div>
  );
};

export default Car;
