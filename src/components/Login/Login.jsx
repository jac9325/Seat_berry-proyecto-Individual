import React, { useEffect } from 'react';
import './__Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserAsync, selectUserLoggued } from '../../slices/userSlices.js';

const Login = () => {
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const loggued = useSelector(selectUserLoggued);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const user = {
      email: elements[0].value,
      password: elements[1].value,
    };
    dispacth(loginUserAsync(user));
  };

  useEffect(() => {
    loggued && navigate('/');
  }, [loggued]);
  return (
    <form className="form-login login-page" onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="/">password?</a>
      </p>
    </form>
  );
};

export default Login;
