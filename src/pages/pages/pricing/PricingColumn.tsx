import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { pricingBreadcrumbItems, pricingColumnData } from 'data/pricing';
import { CSSProperties } from 'react';
import { Col, Row } from 'react-bootstrap';

const PricingColumn = () => {
  return (
    <>
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-7">Pricing</h2>
      <Row className="g-7 g-lg-11 mb-7">
        {pricingColumnData.map(item => (
          <Col sm={6} xxl={3} key={item.title}>
            <img
              src={item.icon}
              alt=""
              className="mb-4 d-dark-none"
              width="120"
              height="96"
            />
            <img
              src={item.iconDark}
              alt=""
              className="mb-4 d-light-none"
              width="120"
              height="96"
            />
            <div className="pricing-column-title-box mb-sm-5">
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-800 mb-0 pe-3">{item.description}</p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <h3 className="display-3 fw-bolder">{item.price}</h3>
              {item.price !== 'Free' && (
                <h5 className="fs-0 fw-normal ms-1">/ month</h5>
              )}
            </div>
            <Button variant={item.btnVariant} size="lg" className="w-100 mb-6">
              Buy
            </Button>
            <h5 className="mb-4">What’s included</h5>
            <ul
              className="fa-ul"
              style={{ '--fa-li-margin': '1.5em' } as CSSProperties}
            >
              <li className="text-800 mb-2">
                <span className="fa-li">
                  <FontAwesomeIcon icon="check" className="text-primary" />
                </span>
                Timeline
              </li>
              <li
                className={classNames('mb-2 text-500', {
                  'text-900': item.features.advanced_search
                })}
              >
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon
                      icon="circle"
                      className={classNames('text-300', {
                        'text-success': item.features.advanced_search
                      })}
                    />
                    <FontAwesomeIcon
                      icon={item.features.advanced_search ? 'check' : 'times'}
                      inverse
                      className={classNames('text-600 fs-11', {
                        'text-white': item.features.advanced_search
                      })}
                    />
                  </span>
                </span>
                Advanced Search
              </li>
              <li
                className={classNames('mb-2 text-500', {
                  'text-900': item.features.custom_fields
                })}
              >
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon
                      icon="circle"
                      className={classNames('text-300', {
                        'text-success': item.features.custom_fields
                      })}
                    />
                    <FontAwesomeIcon
                      icon={item.features.custom_fields ? 'check' : 'times'}
                      inverse
                      className={classNames('text-600 fs-11', {
                        'text-white': item.features.custom_fields
                      })}
                    />
                  </span>
                </span>
                Custom fields
                {item.features.newBadge && (
                  <Badge variant="phoenix" bg="primary" className="ms-2 fs-10">
                    New
                  </Badge>
                )}
              </li>
              <li
                className={classNames('mb-2 text-500', {
                  'text-900': item.features.task_dependencies
                })}
              >
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon
                      icon="circle"
                      className={classNames('text-300', {
                        'text-success': item.features.task_dependencies
                      })}
                    />
                    <FontAwesomeIcon
                      icon={item.features.task_dependencies ? 'check' : 'times'}
                      inverse
                      className={classNames('text-600 fs-11', {
                        'text-white': item.features.task_dependencies
                      })}
                    />
                  </span>
                </span>
                Task dependencies
              </li>
              <li
                className={classNames('mb-2 text-500', {
                  'text-900': item.features.private_teams
                })}
              >
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon
                      icon="circle"
                      className={classNames('text-300', {
                        'text-success': item.features.private_teams
                      })}
                    />
                    <FontAwesomeIcon
                      icon={item.features.private_teams ? 'check' : 'times'}
                      inverse
                      className={classNames('text-600 fs-11', {
                        'text-white': item.features.private_teams
                      })}
                    />
                  </span>
                </span>
                Private teams & projects
              </li>
            </ul>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PricingColumn;
