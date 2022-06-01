import React, { useEffect } from 'react';
import CarRent from './CarRent.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getRentAllAsync, selectRents } from '../../slices/carRentSlices';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const RentListBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const allRents = useSelector(selectRents);

  useEffect(() => {
    dispatch(getRentAllAsync());
  }, []);
  return (
    <>
      <Slider {...settings}>
        {allRents &&
          allRents.length > 0 &&
          allRents.map((rent) => (
            <CarRent
              key={rent._id}
              id={rent._id}
              image={rent.carRent.image}
              category={rent.carRent.category}
              mark={rent.carRent.mark}
              model={rent.carRent.model}
              type={rent.carRent.type}
              year={rent.carRent.year}
              price={rent.cost_day}
              seats={rent.carRent.seats}
            />
          ))}
      </Slider>

      <div className="Container d-flex justify-content-around flex-wrap"></div>
    </>
  );
};

export default RentListBanner;
