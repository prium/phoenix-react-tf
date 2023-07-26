import EcommerceFooter from 'components/footers/EcommerceFooter';
import Footer from 'components/footers/Footer';
import EcommerceTopbar from 'components/navbars/ecommerce/EcommerceTopbar';
import EcommerceNavbar from 'components/navbars/ecommerce/EcommerceNavbar';
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
