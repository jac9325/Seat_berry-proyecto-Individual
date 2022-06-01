import React from 'react';
import './__ProfilePage.scss';
//import CarList from '../../components/Car/CarList.jsx';

const ProfilePage = () => {
  return (
    <div className="container d-flex flex-row flex-wrap">
      <div className="col-sm-3 mt-3">
        <div className="d-grid gap-1">
          <div className="mb-3">
            <p className="h2 text-center">My Profile</p>
          </div>
          <div className="d-flex flex-column">
            <button className="button btn btn-primary mb-3" type="submit">
              Editar Perfil
            </button>
            <button className="button btn btn-primary mb-3" type="submit">
              Create A new Car
            </button>
            <button className="button btn btn-primary mb-3" type="submit">
              My cars
            </button>
            <button className="button btn btn-primary mb-3" type="submit">
              My Rented cars
            </button>
            <button className="button btn btn-primary mb-3" type="submit">
              Create a new Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
