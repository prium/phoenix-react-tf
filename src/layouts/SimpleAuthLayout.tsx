import Logo from 'components/common/Logo';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const SimpleAuthLayout = ({
  columnClass,
  logo = true
}: {
  columnClass?: string;
  logo?: boolean;
}) => {
  return (
    <div className="container">
      <Row className="flex-center min-vh-100 py-5">
        <Col sm={10} md={8} lg={5} className={columnClass}>
          {logo && (
            <Link
              to="/"
              className="d-flex flex-center text-decoration-none mb-4"
            >
              <Logo
                text={false}
                width={58}
                className="fw-bolder fs-5 d-inline-block"
              />
            </Link>
          )}
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default SimpleAuthLayout;
