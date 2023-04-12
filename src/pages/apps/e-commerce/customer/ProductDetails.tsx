import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import ProductColorNav from 'components/navs/ProductColorNav';
import { currencyFormat } from 'helpers/utils';
import React from 'react';
import { Breadcrumb, Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import ProductDescription from 'components/modules/e-commerce/ProductDescription';

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
          <ProductDescription />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
