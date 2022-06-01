const API_SERVER = 'http://localhost:5000';
const ENDPOINTSCARS = {
  GET_ALL: '/seatberry/cars',
  CREATE: '/seatberry/cars/create',
  DELETE: '/seatberry/cars/delete',
  UPDATE: '/seatberry/cars/update',
};

const ENDPOINTSUSERS = {
  LOGIN: '/seatberry/login',
};

const ENDPOINTSRENTED = {
  CREATE: '/seatberry/rented/create',
};
const ENDPOINTSRENTS = {
  GET_ALL: '/seatberry/rents',
  GET_ONE: '/seatberry/rent/6287a47dbd75840b386eb66d',
  CREATE: '/seatberry/rent/create',
};
export const createRented = (rented) => {
  const path = `${API_SERVER}${ENDPOINTSRENTED.CREATE}`;
  console.log('estado de renta: ', rented);
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(rented),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
export const login = (user) => {
  const path = `${API_SERVER}${ENDPOINTSUSERS.LOGIN}`;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ token: data.token });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const createCar = (car) => {
  const path = `${API_SERVER}${ENDPOINTSCARS.CREATE}`;
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const updateCar = ({ id, ...car }) => {
  const path = `${API_SERVER}${ENDPOINTSCARS.UPDATE}/${id}`;
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'PUT',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const getAllCars = () => {
  const path = `${API_SERVER}${ENDPOINTSCARS.GET_ALL}`;
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  //const path = 'http://localhost:4000/seatberry/cars';
  return new Promise((resolve, reject) => {
    fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const deleteCar = (id) => {
  const path = `${API_SERVER}${ENDPOINTSCARS.DELETE}/${id}`;
  console.log('path', path);

  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const getRentAllRents = () => {
  const path = `${API_SERVER}${ENDPOINTSRENTS.GET_ALL}`;
  //const path = 'http://localhost:4000/seatberry/cars';
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const createRent = (rent) => {
  const path = `${API_SERVER}${ENDPOINTSRENTS.CREATE}`;
  console.log('estado de renta: ', rent);
  const token = JSON.parse(localStorage.getItem('infoUser')).token;
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(rent),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(true);
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
