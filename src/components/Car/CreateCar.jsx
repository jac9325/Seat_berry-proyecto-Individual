import React, { useState } from 'react';
import { createCarAsync, getAllCarsAsync } from '../../slices/carSlices.js';
import { useDispatch } from 'react-redux';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import './__CreateCar.scss';

const CreateCar = ({ show, handleHide }) => {
  const dispacth = useDispatch();
  const [pathImage, setPathImage] = useState(
    'https://image.shutterstock.com/image-vector/car-silhouette-260nw-292354133.jpg'
  );
  //const [file, setFile] = useState();
  //console.log(file);
  const handleChange = (e) => {
    console.log('target', e.target);
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      //setFile(file);

      if (file.type.includes('image')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          const { result } = reader;
          setPathImage(result);
          console.log(result);
        };
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const car = {
      model: elements[1].value,
      mark: elements[0].value,
      year: elements[2].value,
      seats: elements[3].value,
      description: elements[6].value,
      id_user: '125',
      category: elements[5].value,
      image:
        'https://brillianceauto.com.ec/wp-content/uploads/2020/09/brilliance-v7-slider-home-2.png',
      type: elements[4].value,
      status: '1',
      status_rent: '0',
    };
    await dispacth(createCarAsync(car));
    dispacth(getAllCarsAsync());
  };

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Create Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Label>Mark</Form.Label>
              <Form.Control placeholder="" required />
            </Col>
            <Col>
              <Form.Label>Model</Form.Label>
              <Form.Control required />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Label>Year</Form.Label>
              <Form.Control type="Number" required></Form.Control>
            </Col>
            <Col>
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control type="Number" required></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select a Type</option>
                <option value="Auto">Auto</option>
                <option value="Not-Auto">Not- Auto</option>
              </Form.Select>
            </Col>

            <Col>
              <Form.Label>Select a Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select a Category</option>
                <option value="Family">Family</option>
                <option value="Aventura">Aventura</option>
                <option value="Work">Work</option>
              </Form.Select>
            </Col>
          </Row>
          <br />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Images</Form.Label>
            <div>
              <img src={pathImage} alt="car" className="imagen-producto" />
            </div>
            <input type="file" onChange={handleChange} />
          </Form.Group>
          <br />
          <Button type="submit">Create Car</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCar;
