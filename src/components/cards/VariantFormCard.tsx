import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VariantFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-4">Variants</h4>
        <Row className="gx-3 gy-4">
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex gap-2 mb-2">
              <h5 className="mb-0 text-1000">Option 1</h5>
              <Link className="fw-bold fs-9" to="#!">
                Remove
              </Link>
            </div>
            <Form.Select>
              <option value="size">Size</option>
              <option value="color">Color</option>
              <option value="weight">Weight</option>
              <option value="smell">Smell</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default VariantFormCard;
