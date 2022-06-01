import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRentAllAsync, selectRents } from '../../slices/carRentSlices.js';
import CarRent from './CarRent.jsx';

const CarRenList = () => {
  const dispath = useDispatch();
  const rents = useSelector(selectRents);
  /*useEffect(() => {
    fetch('http://localhost:4000/seatberry/cars')
      .then((response) => response.json())
      .then((data) => {
        console.log('DATA ', data);
      });
  }, []);*/
  useEffect(() => {
    dispath(getRentAllAsync());
  }, []);
  return (
    <div className="container d-flex flex-row justify-content-around flex-wrap">
      {rents &&
        rents.length > 0 &&
        rents.map((rent) => (
          <CarRent
            key={rent._id}
            id={rent._id}
            image={rent.carRent.image}
            category={rent.carRent.category}
            mark={rent.carRent.mark}
            model={rent.carRent.model}
            seats={rent.carRent.seats}
            type={rent.carRent.type}
            year={rent.carRent.year}
            price={rent.cost_day}
          />
        ))}
    </div>
  );
};

export default CarRenList;
