import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'components/base/Rating';
import { StoreItem as StoreItemType } from 'data/e-commerce/stores';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StoreItem = ({ store }: { store: StoreItemType }) => {
  return (
    <div className="hover-actions-trigger btn-reveal-trigger">
      <div className="border d-flex flex-center rounded-3 mb-3 p-4" style={{ height: 180 }}>
        <img className="mw-100" src={store.logo} alt={store.name} />
      </div>
      <h5 className="mb-2">{store.name}</h5>
      <div className="mb-1">
        <Rating initialValue={store.rating} iconClass="fs-9" />
      </div>
      <p className="text-500 fs-9 mb-2 fw-semi-bold">({store.rated} people rated)</p>
      <Link className="p-0 fs-9 fw-bold" to="#!">
        Visit Store
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs-10" />
      </Link>

      <Dropdown className="hover-actions top-0 end-0 mt-2 me-3">
        <Dropdown.Toggle
          variant=""
          className="btn-reveal bg-100 dropdown-caret-none transition-none btn-icon"
        >
          <FontAwesomeIcon icon="ellipsis-h" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="py-2" align="end">
          <Dropdown.Item href="#!">View</Dropdown.Item>
          <Dropdown.Item href="#!">Export</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#!" className="text-danger">
            Remove
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default StoreItem;
