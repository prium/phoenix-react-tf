import EcommerceFooter from 'components/footers/EcommerceFooter';
import EcommerceNavbar from 'components/layouts/EcommerceNavbar';
import Footer from 'components/layouts/Footer';
import EcommerceTopbar from 'components/layouts/navbar/ecommerce-topbar/EcommerceTopbar';
import { Outlet } from 'react-router-dom';

const EcommerceLayout = () => {
  return (
    <>
      <EcommerceTopbar />
      <div className="position-relative">
        <EcommerceNavbar />
        <Outlet />
      </div>
      <EcommerceFooter />
      <Footer />
    </>
  );
};

export default EcommerceLayout;
