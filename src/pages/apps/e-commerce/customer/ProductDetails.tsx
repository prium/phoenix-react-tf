import { Breadcrumb, Col, Row } from 'react-bootstrap';
import ProductDescription from 'components/modules/e-commerce/ProductDescription';
import ProductDetailsTab from 'components/modules/e-commerce/ProductDetailsTab';
import UsuallyBoughtTogetherCard from 'components/cards/UsuallyBoughtTogetherCard';
import {
  suggestedProducts,
  topElectronicProducts
} from 'data/e-commerce/products';
import SimilarProducts from 'components/sliders/SimilarProducts';
import Section from 'components/base/Section';

const ProductDetails = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <Breadcrumb className="mb-0">
          <Breadcrumb.Item href="#!">Fashion</Breadcrumb.Item>
          <Breadcrumb.Item href="#!">Womens fashion</Breadcrumb.Item>
          <Breadcrumb.Item href="#!">Footwear</Breadcrumb.Item>
          <Breadcrumb.Item href="#!" active>
            Hills
          </Breadcrumb.Item>
        </Breadcrumb>
        <ProductDescription />
      </Section>

      <Section small className="py-0">
        <Row className="gx-3 gy-7 mb-9">
          <Col xs={12} lg={7} xl={8}>
            <ProductDetailsTab />
          </Col>
          <Col xs={12} lg={5} xl={4}>
            <UsuallyBoughtTogetherCard
              products={suggestedProducts}
              className="mt-9"
            />
          </Col>
        </Row>
      </Section>

      <Section className="py-0">
        <SimilarProducts products={topElectronicProducts} />
      </Section>
    </div>
  );
};

export default ProductDetails;
