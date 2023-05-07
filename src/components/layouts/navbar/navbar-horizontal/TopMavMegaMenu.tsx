import { Col, Dropdown, Row } from 'react-bootstrap';
import { Route, RouteItems } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import Scrollbar from 'components/base/Scrollbar';
import logoBg from 'assets/img/icons/logo-bg.png';
import { Fragment } from 'react';

const TopNavMegaMenu = ({ route }: { route: RouteItems }) => {
  const columns: Route[][] = [[], [], []];

  route.pages.forEach((page, index) => {
    if ([0, 1, 2].includes(index)) {
      columns[1].push(page);
    }
    if (index === 3) {
      columns[0].push(page);
    }
    if (index === 4) {
      columns[2].push(page);
    }
  });

  return (
    <Dropdown.Menu as="ul" className=" navbar-dropdown-caret dropdown-menu-card py-0">
      <div className="border-0" style={{ height: '60vh' }}>
        <Scrollbar>
          <div
            className="px-3 pt-4 pb-3 img-dropdown"
            style={{
              backgroundImage: `url(${logoBg})`
            }}
          >
            <Row className="gx-4 gy-5">
              {columns.map((column, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  {column.map((page, index) => (
                    <Fragment key={page.name}>
                      <div
                        className={classNames('dropdown-item-group', {
                          'mt-5': index > 0
                        })}
                      >
                        <FeatherIcon icon={page.icon} size={16} className="me-2" />
                        <h6 className="dropdown-item-title">{capitalize(page.name)}</h6>
                      </div>
                      <TopNavMegaMenuIitemsLooper page={page} />
                    </Fragment>
                  ))}
                </Col>
              ))}
            </Row>
          </div>
        </Scrollbar>
      </div>
    </Dropdown.Menu>
  );
};

const TopNavMegaMenuIitemsLooper = ({ page }: { page: Route }) => {
  return (
    <>
      {page.pages!.map(page => (
        <Fragment key={page.name}>
          {page.pages ? (
            <TopNavMegaMenuIitemsLooper page={page!} />
          ) : (
            <Link to="#!" className="dropdown-link">
              {capitalize(page.name)}
            </Link>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default TopNavMegaMenu;
