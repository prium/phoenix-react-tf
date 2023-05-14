import ProductsTable from 'components/tables/ProductsTable';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Products = () => {
  return (
    <div>
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
        <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
        <Breadcrumb.Item href="#!" active>
          Default
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-9">
        <h2 className="mb-4">Products</h2>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};

export default Products;
