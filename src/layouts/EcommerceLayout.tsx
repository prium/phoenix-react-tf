import EcommerceFooter from 'components/footers/EcommerceFooter';
import EcommerceNavbar from 'components/layouts/EcommerceNavbar';
import EcommerceTopbar from 'components/layouts/navbar/ecommerce-topbar/EcommerceTopbar';
import { categories } from 'data/ecommerce';
import React from 'react';
import { Outlet } from 'react-router-dom';

const EcommerceLayout = () => {
  const category = categories.map(category => ({
    ...category,
    sections: category.sections.map(sec => ({ label: sec, url: '#!' }))
  }));
  console.log(category);

  return (
    <>
      <EcommerceTopbar />
      <EcommerceNavbar />
      <Outlet />
      <EcommerceFooter />
    </>
  );
};

export default EcommerceLayout;
