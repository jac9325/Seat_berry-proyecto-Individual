import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsAsync, selectCars } from '../../slices/carSlices';
import Car from './Car.jsx';

const CarList = () => {
  const dispath = useDispatch();
  const cars = useSelector(selectCars);
  /*useEffect(() => {
    fetch('http://localhost:4000/seatberry/cars')
      .then((response) => response.json())
      .then((data) => {
        console.log('DATA ', data);
      });
  }, []);*/
  useEffect(() => {
    dispath(getAllCarsAsync());
  }, []);
  return (
    <div className="container d-flex flex-row justify-content-around flex-wrap">
      {cars &&
        cars.length > 0 &&
        cars.map((car) => (
          <Car
            image={car.image}
            id_user={car.id_user}
            key={car._id}
            _id={car._id}
            category={car.category}
            mark={car.mark}
            model={car.model}
            seats={car.seats}
            type={car.type}
            year={car.year}
            description={car.description}
          />
        ))}
    </div>
  );
};

export default CarList;
