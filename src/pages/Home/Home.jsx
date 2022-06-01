import React from 'react';
import './__Home.scss';
import RentListBanner from '../../components/CarRent/RentListBanner.jsx';
import Mark from '../../components/Mark/Mark.jsx';

const Home = () => {
  return (
    <>
      <div className="container-fluid portada d-flex justify-content-center">
        <div className="container slogan col-6 text-center">
          <h1 className="Slogan">Find Rental Car Deals</h1>
          <h4>All brands, all models</h4>
        </div>
      </div>
      <div className="ps-5 pt-4">
        <p className="h2 mb-5 text-center">RENT THE CAR OF YOUR CHOICE</p>
        <RentListBanner />
        <div className="d-flex justify-content-center">
          <button type="button btn-lg" className="btn btn-danger mt-4 mb-4">
            All the Rents
          </button>
        </div>
      </div>
      <hr />
      <div className="ps-5 pt-4">
        <p className="h2 mb-5 text-center">All the Marks</p>
        <Mark />
      </div>
    </>
  );
};

export default Home;
