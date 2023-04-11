import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const ProductDetails = () => {
  return (
    <div className="pt-5 mb-9">
      <section className="py-0">
        <div className="container-small">
          <Breadcrumb className="mb-0">
            <Breadcrumb.Item href="#!">Fashion</Breadcrumb.Item>
            <Breadcrumb.Item href="#!">Womens fashion</Breadcrumb.Item>
            <Breadcrumb.Item href="#!">Footwear</Breadcrumb.Item>
            <Breadcrumb.Item href="#!" active>
              Hills
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
