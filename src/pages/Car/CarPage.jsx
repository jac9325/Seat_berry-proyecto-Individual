import React, { useState } from 'react';
import CarList from '../../components/Car/CarList.jsx';
import CreateCar from '../../components/Car/CreateCar.jsx';
import CarRentList from '../../components/CarRent/CarRentList.jsx';

const CarPage = () => {
  const [showCreateCar, setShowCreateCar] = useState(false);

  const handleShowCreateCar = () => {
    setShowCreateCar(true);
  };
  const handleHideCreatecar = () => {
    setShowCreateCar(false);
  };
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column align-items-center">
        <p className="h1 text-center mt-3 mb-3">My Cars</p>
        <button
          type="submit"
          className="btn btn-danger mb-3"
          onClick={handleShowCreateCar}
        >
          Create New Car
        </button>
      </div>
      <div className="row mt-5">
        <div className="container">
          <CarList />
        </div>
      </div>
      <div className="col-sm-9">
        <CreateCar show={showCreateCar} handleHide={handleHideCreatecar} />
      </div>
      <div>
        <p className="h1 text-center mt-3 mb-3">Car for rents </p>
      </div>
      <div className="row mt-5">
        <div className="container">
          <CarRentList />
        </div>
      </div>
    </div>
  );
};
export default CarPage;
