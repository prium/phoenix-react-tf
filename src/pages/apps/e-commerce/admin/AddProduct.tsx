import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const AddProduct = () => {
  return (
    <div>
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
        <Breadcrumb.Item href="#!" active>
          Default
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default AddProduct;
