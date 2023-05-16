import Section from 'components/base/Section';
import EcomWishlistTable from 'components/tables/EcomWishlistTable';
import { Breadcrumb } from 'react-bootstrap';

const Wishlist = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <Breadcrumb className="mb-2">
          <Breadcrumb.Item href="#!">Page 1</Breadcrumb.Item>
          <Breadcrumb.Item href="#!">Page 2</Breadcrumb.Item>
          <Breadcrumb.Item href="#!" active>
            Default
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="mb-5">
          Wishlist
          <span className="text-700 fw-normal ms-2">(43)</span>
        </h2>
        <EcomWishlistTable />
      </Section>
    </div>
  );
};

export default Wishlist;
