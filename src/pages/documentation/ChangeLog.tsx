import PhoenixDocCard from 'components/base/PhoenixDocCard';

const ChangeLog = () => {
  return (
    <div>
      <h2 className="mb-4 lh-sm">Changelog</h2>
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header noPreview>
          <h5 className="mb-2">
            <code className="fw-bold fs-7">v1.1.0</code> - Hermes
          </h5>
          <p className="mb-0">22 May, 2023</p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <h6 className="mb-2">New</h6>
          <ul className="bullet-inside ps-0 mb-0">
            <li>
              PAGE : <code>apps/e-commerce/admin/add-product</code>
            </li>
            <li>
              PAGE : <code>apps/e-commerce/admin/products</code>
            </li>
            <li>
              PAGE : <code>apps/e-commerce/admin/customers</code>
            </li>
            <li>
              PAGE : <code>apps/e-commerce/admin/customer-details</code>
            </li>
            <li>
              PAGE : <code>apps/e-commerce/admin/orders</code>
            </li>
            <li>
              PAGE : <code>apps/e-commerce/admin/order-details</code>
            </li>
            <li>
              PAGE : <code>apps/e-commerce/admin/refund</code>
            </li>
          </ul>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header noPreview>
          <h5 className="mb-2">
            <code className="fw-bold fs-7">v1.0.0</code> - Initial Release
          </h5>
          <p className="mb-0">7 May, 2023</p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <p className="mb-0">Nothing to see here.</p>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default ChangeLog;
