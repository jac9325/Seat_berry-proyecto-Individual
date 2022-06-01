import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './__RentPage.scss';
import { useNavigate } from 'react-router-dom';

import { createRentedAsync } from '../../slices/rentedSlices.js';
const RentPage = () => {
  const { id } = useParams();
  console.log('id', id);
  const dispacth = useDispatch();
  const [rent, setRent] = useState([]);
  const [dateInit, setDateInit] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [value, setValue] = useState();
  const [days, setDays] = useState(0);
  const navigate = useNavigate();

  const getRent = async () => {
    const response = await fetch(`http://localhost:5000/seatberry/rent/${id}`);
    const result = await response.json();
    setRent(result);
    console.log(result);
  };
  useEffect(() => {
    getRent();
  }, []);

  const handleTimeEnd = (e) => {
    setDateEnd(e.target.value);
  };
  const handleValue = () => {
    var fechaInicio = new Date(dateInit).getTime();
    var fechaFin = new Date(dateEnd).getTime();
    const diff = fechaFin - fechaInicio;
    const days = diff / (1000 * 60 * 60 * 24);
    setDays(days);
    const total = rent.cost_day * days;
    setValue(total);
  };
  const handleTimeInit = async (e) => {
    await setDateInit(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const rented = {
      id_rent: rent._id,
      start_date: dateInit,
      end_date: dateEnd,
      cost: value,
      extra_cost: 0,
      time: days,
      description: 'description',
      observation: elements[3].value,
      status: 1,
      id_user: rent.id_user,
    };
    (await dispacth(createRentedAsync(rented))) && navigate('/');
  };

  return (
    <div className="container-fluid d-flex">
      <div className="col-sm-8">
        <div className="d-flex justify-content-between me-5">
          <h1 className="mt-5 mx-4">Hyunday- Accent</h1>
          <div className="d-flex flex-column justify-content-end">
            <h6>Rating</h6>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <h6 className="mt-1" style={{ color: 'rgb(79, 79, 164)' }}>
              3 reviews
            </h6>
          </div>
        </div>
        <hr />
        <div className="container d-flex">
          <div className="col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
            &nbsp; Easy Cancellation
          </div>
          <div className="col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-credit-card"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
              <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
            </svg>
            &nbsp; Secure Payment
          </div>
          <div className="col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-border-width"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
            &nbsp; Documents in order
          </div>
          <div className="col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-card-image"
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
            </svg>
            &nbsp; First Category cars
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <img
            src="https://brillianceauto.com.ec/wp-content/uploads/2020/09/brilliance-v7-slider-home-2.png"
            alt=""
          />
        </div>
        <div className="container mx-3">
          <div>
            <h2 className="subTitle mb-3">Car Information</h2>
          </div>
          <div>
            <h3 className="">Override</h3>
          </div>
          <div>
            <p>Es un magnifico auto, con 6 cajas de cambio</p>
          </div>
        </div>
        <div className="container d-flex justify-content-around mb-5">
          <div className="col-6 ">
            <h3>Mark:</h3>
            <h6>Hyunday</h6>
          </div>
          <div className="col-6">
            <h3>Model:</h3>
            <h6>Accent</h6>
          </div>
          <div className="col-6 ">
            <h3>Type:</h3>
            <h6>No Auto</h6>
          </div>
          <div className="col-6">
            <h3>Year:</h3>
            <h6>2022</h6>
          </div>
        </div>
      </div>
      <div className="container  col-sm-4 d-flex justify-content-center mt-5">
        <div className="col-3 car-left">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col className="text-center">
                <Form.Label>
                  <h3 className="text">${rent.cost_day}.00/day</h3>{' '}
                </Form.Label>
              </Col>
            </Row>
            <br />
            <Form.Group controlId="duedate">
              <Form.Label>Pick Up Time</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                onChange={handleTimeInit}
              />
            </Form.Group>

            <Form.Group controlId="duedate">
              <Form.Label>Return Time</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                onChange={handleTimeEnd}
              />
              <br />
              <h3 className="h3dato" style={{ color: 'white' }}>
                Total: &nbsp; $&nbsp;{value}.00
              </h3>
              <br />
              <Button onClick={handleValue}>Calculate</Button>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Observations:</Form.Label>
              <Form.Control as="textarea" name="duedate" />
            </Form.Group>
            <br />
            <Button type="submit">Rental Car</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RentPage;
