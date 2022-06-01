import React from 'react';
import './__Footer.scss';

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <footer
        className="text-center text-lg-start text-white"
        style={{ background: '#212529' }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ background: '#6351ce' }}
        >
          <div className="me-5">
            <span className="text-white">
              Get connected with us on social networks:
            </span>
          </div>
          <div>
            <a href="/" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white">SEATBERRY</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: '60px',
                    background: '#7c4dff',
                    height: '2px',
                  }}
                />
                <p className="text-white">
                  We are a company that helps you find and manage your perfect
                  car rental
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white">Cars</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: '60px',
                    background: '#7c4dff',
                    height: '2px',
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Hyunday
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Toyota
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Chrevollet
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Nissan
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white">
                  Our social Networks
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: '60px',
                    background: '#7c4dff',
                    height: '2px',
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Facebook
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Instagram
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Twiter
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Redit
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold text-white">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  sstyle={{
                    width: '60px',
                    background: '#7c4dff',
                    height: '2px',
                  }}
                />
                <p className="text-white">
                  <i className="fas fa-home mr-3 text-white"></i> Cusco,Cusco,
                  Perú
                </p>
                <p className="text-white">
                  <i className="fas fa-envelope mr-3 text-white"></i>{' '}
                  jac.s9325@gmail.com
                </p>
                <p className="text-white">
                  <i className="fas fa-phone mr-3"></i> + 51 981 862 537
                </p>
                <p className="text-white">
                  <i className="fas fa-print mr-3"></i> + 51 981 862 537
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center text-white p-3"
          style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Jaime Amilcar Catari Sinsaya
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
