import React, { useEffect, useRef } from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarToUpdate } from '../../slices/carSlices.js';
import { updateCarAsync, getAllCarsAsync } from '../../slices/carSlices.js';

const UpdateCar = ({ show, handleHide }, car) => {
  const disptach = useDispatch();
  const carToUpdate = useSelector(selectCarToUpdate);
  //Reference
  const modelRef = useRef();
  const markRef = useRef();
  const yearRef = useRef();
  const seatsRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const typeRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const car = {
      model: elements[1].value,
      mark: elements[0].value,
      year: elements[2].value,
      seats: elements[3].value,
      description: elements[6].value,
      id_user: '1123121',
      category: elements[5].value,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpNbPty7PyOxCHGijvO6R61IgQSWku1K3BA&usqp=CAU',
      type: elements[4].value,
      status: '1',
    };
    const { _id: idCar } = carToUpdate;
    await disptach(updateCarAsync({ id: idCar, ...car }));
    disptach(getAllCarsAsync());
  };

  useEffect(() => {
    if (carToUpdate) {
      const { model, mark, year, seats, description, category, type } =
        carToUpdate;
      //Initialize values to update form
      modelRef.current.value = model;
      markRef.current.value = mark;
      yearRef.current.value = year;
      seatsRef.current.value = seats;
      descriptionRef.current.value = description;
      categoryRef.current.value = category;
      typeRef.current.value = type;
    }
  }, [carToUpdate]);

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>UpdateCar Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Mark</Form.Label>
              <Form.Control placeholder="" required ref={markRef} />
            </Col>
            <Col>
              <Form.Label>Model</Form.Label>
              <Form.Control required ref={modelRef} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Label>Year</Form.Label>
              <Form.Control type="Number" required ref={yearRef}></Form.Control>
            </Col>
            <Col>
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control
                type="Number"
                required
                ref={seatsRef}
              ></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Default select example" ref={typeRef}>
                <option>Select a Type</option>
                <option value="Auto">Auto</option>
                <option value="Not-Auto">Not- Auto</option>
              </Form.Select>
            </Col>
          </Row>
          <br />
          <Form.Group>
            <Form.Label>Select a Category</Form.Label>
            <Form.Select aria-label="Default select example" ref={categoryRef}>
              <option>Select a Category</option>
              <option value="Family">Family</option>
              <option value="Aventura">Aventura</option>
              <option value="Work">Work</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" ref={descriptionRef}></Form.Control>
          </Form.Group>
          <br />
          <Button type="submit">Update Car</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateCar;
