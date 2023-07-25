import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingColumnItem from 'components/pricing-items/PricingColumnItem';
import { pricingBreadcrumbItems, pricingItems } from 'data/pricing';
import { Row } from 'react-bootstrap';

const PricingColumn = () => {
  return (
    <>
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-7">Pricing</h2>
      <Row className="g-7 g-lg-11 mb-7">
        {pricingItems.map((item, index) => (
          <PricingColumnItem key={index} pricing={item} index={index} />
        ))}
      </Row>
    </>
  );
};

export default PricingColumn;
