import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import {
  selectRentToCreate,
  createRentAsync,
  getRentAllAsync,
} from '../../slices/carRentSlices.js';

const CarRent = ({ show, handleHide, car }) => {
  const dispacth = useDispatch();
  const rentToCreate = useSelector(selectRentToCreate);
  //referenced
  const modelRef = useRef();
  const markRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
    console.log('elements: ', elements);
    const rent = {
      id_user: rentToCreate.id_user,
      cost_day: elements[0].value,
      max_days: elements[1].value,
      date: '2021-01-15T06:31:15.000Z',
      id_car: rentToCreate._id,
      description: elements[3].value,
      observation: elements[4].value,
      rating: '5',
      status: '1',
    };
    console.log('rent', rent);
    await dispacth(createRentAsync(rent));
    dispacth(getRentAllAsync());
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>
          Create a New Car Rental <br />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Costs / day</Form.Label>
              <Form.Control type="number" placeholder="" required />
            </Col>
            <Col>
              <Form.Label>Max N° days</Form.Label>
              <Form.Control type="number" required />
            </Col>
          </Row>
          <br />
          <Form.Group controlId="duedate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="duedate" placeholder="Due date" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" ref={modelRef}></Form.Control>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Observation</Form.Label>
            <Form.Control as="textarea" ref={markRef}></Form.Control>
          </Form.Group>
          <Button type="submit">Create Rental</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CarRent;
