//@ts-nocheck
import { Stack } from 'react-bootstrap';
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';

const Starter = () => {
  const calculate = (first, second, third) => first * 6 + second + third * 5;

  console.log('basic', calculate(20000, 25000, 30000));
  console.log('hr', calculate(10000, 12500, 15000));
  console.log('trans', calculate(3500, 4000, 5200));
  console.log('food', calculate(4000, 5000, 5500));
  console.log('medical', calculate(1000, 1250, 1500));
  console.log('mis', calculate(1500, 2250, 2800));
  console.log('pf', calculate(1000, 1250, 1500));

  return (
    <Stack className="flex-center content-min-h">
      <div className="text-center py-9">
        <img
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
        </Button>
      </div>
    </Stack>
  );
};

export default Starter;
