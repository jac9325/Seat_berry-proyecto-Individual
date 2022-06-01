import React from 'react';
import './__Navb.scss';
import { useNavigate } from 'react-router-dom';
import { selectUserLoggued, LogoutAsync } from '../../slices/userSlices';
import { useSelector, useDispatch } from 'react-redux';
import { getRentAllAsync } from '../../slices/carRentSlices';

const Nav = ({ value }) => {
  const logged = useSelector(selectUserLoggued);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hanldeCars = () => {
    navigate('/my-cars');
  };
  const hanldeProfile = () => {
    navigate('/profile');
  };
  const hanldeSalir = () => {
    dispatch(LogoutAsync());
    dispatch(getRentAllAsync());
    navigate('/');
  };
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container ">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0 ">
            <li>
              <a
                href="/"
                className="nav-link px-4 py-0 text-white fw-bold fs-2"
              >
                SEATBERRY
              </a>
            </li>

            <li>
              <a href="/" className="nav-link px-2 text-white fs-5">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link px-2 text-white fs-5">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link px-2 text-white fs-5">
                About
              </a>
            </li>
          </ul>
          <div
            className="text-end"
            style={{ display: !logged ? 'block' : 'none' }}
          >
            <a href="/login">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
            </a>
            <a href="/register">
              <button type="button" className="btn btn-warning me-2">
                Sign-up
              </button>
            </a>
          </div>
          <div
            className="text-end-2"
            style={{ display: logged ? 'block' : 'none' }}
          >
            <button
              type="button"
              onClick={hanldeProfile}
              className="btn btn-outline-light me-2"
            >
              My Profile
            </button>

            <button
              type="button"
              onClick={hanldeCars}
              className="btn btn-warning me-2"
            >
              My cars
            </button>

            <button
              type="button"
              onClick={hanldeSalir}
              className="btn btn-warning me-2"
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
