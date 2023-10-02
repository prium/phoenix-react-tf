import React from 'react';
import { Stack } from 'react-bootstrap';
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';
import logo from 'assets/img/icons/logo.png';

const Starter = () => {
  return (
    <Stack className="flex-center content-min-h">
      {/* <div className="text-center py-9"> */}

      <div className="loading-container ">
        <img src={logo} alt="phoenix" className="logo-ripple ripple-1" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-2" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-3" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-4" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-5" />
      </div>

      {/* <div className="ripple2"></div> */}
      {/* <img
          src={starterImg}
          width={470}
          className="img-fluid mb-7 d-dark-none"
          alt="starter"
        />
        <img
          src={starterDarkImg}
          width={470}
          className="img-fluid mb-7 d-light-none"
          alt="starter"
        />
        <h1 className="text-800 fw-normal mb-5">Create Something Beautiful.</h1>
        <Button
          as={Link}
          className="btn btn-lg btn-primary"
          to="/documentation/getting-started"
        >
          Getting Started
        </Button> */}
      {/* </div> */}
    </Stack>
  );
};

export default Starter;
