import React from 'react';
import { Stack } from 'react-bootstrap';
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';

const Starter = () => {
  return (
    <Stack className="flex-center content-min-h">
      <div className="text-center py-9">
        <img src={starterImg} width={470} className="img-fluid mb-7 d-dark-none" alt="starter" />
        <img
          src={starterDarkImg}
          width={470}
          className="img-fluid mb-7 d-light-none"
          alt="starter"
        />
        <h1 className="text-800 fw-normal mb-5">Create Something Beautiful.</h1>
        <a className="btn btn-lg btn-primary" href="../documentation/getting-started.html">
          Getting Started
        </a>
      </div>
    </Stack>
  );
};

export default Starter;
