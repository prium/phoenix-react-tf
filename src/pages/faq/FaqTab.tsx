import bg from 'assets/img/bg/bg-40.png';
import bgDark from 'assets/img/bg/bg-dark-40.png';
import { Link } from 'react-router-dom';
import SearchBox from 'components/common/SearchBox';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { faqCategories } from 'data/faq';
import FaqCategoryCard from 'components/cards/FaqCategoryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCircle,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { useState, Dispatch, SetStateAction } from 'react';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import Button from 'components/base/Button';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const FaqTab = () => {
  const [activeKey, setActiveKey] = useState('all');
  const [subCategoryActiveKey, subCategorySetActiveKey] = useState('sale-101');
  const [openTab, setOpenTab] = useState(false);
  const { breakpoints } = useBreakpoints();

  return (
    <div className="mb-9">
      <div
        className="mx-n4 mx-lg-n6 mt-n5 position-relative mb-md-9"
        style={{ height: '208px' }}
      >
        <div
          className="bg-holder d-dark-none"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover'
          }}
        />
        <div
          className="bg-holder d-light-none"
          style={{
            backgroundImage: `url(${bgDark})`,
            backgroundSize: 'cover'
          }}
        />
        <div className="faq-title-box position-relative bg-white border border-200 p-6 rounded-3 text-center mx-auto">
          <h1>How can we help?</h1>
          <p className="my-3">
            Search for the topic you need help with or
            <Link to="#!"> contact our support</Link>
          </p>
          <SearchBox className="w-100" placeholder="" />
        </div>
      </div>
      <Tab.Container
        defaultActiveKey={activeKey}
        //@ts-ignore
        onSelect={key => setActiveKey(key)}
        activeKey={activeKey}
      >
        <Row className="gx-xl-8 gx-xxl-11 gy-6">
          {breakpoints.up('md') && <CategoryTab />}
          <Col
            md={6}
            xl={7}
            xxl={8}
            className="empty-header d-none d-md-block"
          ></Col>
          <Col xs={12} className="m-0">
            <Tab.Container
              defaultActiveKey={subCategoryActiveKey}
              //@ts-ignore
              onSelect={key => subCategorySetActiveKey(key)}
              id="sub-category"
              activeKey={subCategoryActiveKey}
            >
              <Row className="gx-xl-8 gx-xxl-11 gy-6">
                {breakpoints.up('md') && (
                  <SubCategoryTab categoryType={activeKey} />
                )}
                <Col md={6} xl={7} xxl={8}>
                  <SubCategoryContent setOpenTab={setOpenTab} />
                </Col>
              </Row>
            </Tab.Container>
            {breakpoints.down('md') && (
              <PhoenixOffcanvas
                open={openTab}
                placement="start"
                noBackdrop
                className="faq-offcanvas w-100"
                fixed
              >
                <CategoryTab setActiveKey={setActiveKey} />
                <SubCategoryTab
                  categoryType={activeKey}
                  setOpenTab={setOpenTab}
                  setActiveKey={setActiveKey}
                  subCategorySetActiveKey={subCategorySetActiveKey}
                  subCategoryActiveKey={subCategoryActiveKey}
                />
              </PhoenixOffcanvas>
            )}
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

const SubCategoryContent = ({
  setOpenTab
}: {
  setOpenTab: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Tab.Content
      className="position-sticky"
      style={{ top: '8rem' }}
      defaultValue="sale-101"
    >
      <Button
        onClick={() => setOpenTab(true)}
        variant="link"
        className="d-md-none mb-6 mt-15 mt-md-6 fs-8 ps-0"
        startIcon={
          <FontAwesomeIcon icon={faChevronLeft} className="fs-9 me-2" />
        }
      >
        Categories
      </Button>
      {faqCategories.map(category => (
        <Tab.Pane key={category.id} eventKey={category.id}>
          <ul className="list-inline mb-0">
            {category.topFaqs.map(item => (
              <li key={item.que} className="d-flex gap-2 mb-6">
                <FontAwesomeIcon icon={faStar} className="fs-8 text-primary" />
                <div>
                  <h4 className="mb-3 text-1000">{item.que}</h4>
                  <p className="mb-0 text-700">{item.ans}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr className="text-300" />
          <ul className="faq-list list-inline">
            {category.faqs.map(item => (
              <li key={item.que} className="d-flex mt-6">
                <FontAwesomeIcon icon={faCircle} />
                <div>
                  <h4 className="mb-3 text-1000">{item.que}</h4>
                  <p className="mb-0 text-700">{item.ans}</p>
                </div>
              </li>
            ))}
          </ul>
        </Tab.Pane>
      ))}
    </Tab.Content>
  );
};

const SubCategoryTab = ({
  categoryType,
  setOpenTab,
  setActiveKey,
  subCategorySetActiveKey,
  subCategoryActiveKey
}: {
  categoryType?: string;
  setOpenTab?: Dispatch<SetStateAction<boolean>>;
  setActiveKey?: Dispatch<SetStateAction<string>>;
  subCategorySetActiveKey?: Dispatch<SetStateAction<string>>;
  subCategoryActiveKey?: string;
}) => {
  return (
    <Col md={6} xl={5} xxl={4}>
      <Nav
        className="faq-subcategory-tab w-sm-75 w-md-100 mx-auto mb-4"
        style={{ width: '90%' }}
      >
        {categoryType === 'popular' &&
          faqCategories.map(
            (category, index) =>
              category.category === 'popular' && (
                <Nav.Item
                  onClick={() => {
                    setOpenTab && setOpenTab(false);
                    setActiveKey && setActiveKey(categoryType);
                    subCategorySetActiveKey &&
                      subCategorySetActiveKey(category.id);
                  }}
                  key={category.id}
                  className={`w-100 ${
                    index !== faqCategories.length - 1 ? 'mb-3' : 'mb-0'
                  }`}
                >
                  <FaqCategoryCard
                    subCategoryActiveKey={subCategoryActiveKey}
                    category={category}
                  />
                </Nav.Item>
              )
          )}
        {categoryType === 'all' &&
          faqCategories.map((category, index) => (
            <Nav.Item
              onClick={() => {
                setOpenTab && setOpenTab(false);
                setActiveKey && setActiveKey(categoryType);
                subCategorySetActiveKey && subCategorySetActiveKey(category.id);
              }}
              key={category.id}
              className={`w-100 ${
                index !== faqCategories.length - 1 ? 'mb-3' : 'mb-0'
              }`}
            >
              <FaqCategoryCard
                subCategoryActiveKey={subCategoryActiveKey}
                category={category}
              />
            </Nav.Item>
          ))}
      </Nav>
    </Col>
  );
};

const CategoryTab = ({
  setActiveKey
}: {
  setActiveKey?: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Col md={6} xl={5} xxl={4} className="faq-category-tab">
      <Nav
        variant="underline"
        className="mb-2 mb-md-5 pb-3 pt-2 w-100 w-sm-75 w-md-100 mx-auto bg-soft"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="popular"
            className="fw-semi-bold me-3 fs-8 pe-2 text-center"
            onClick={() => {
              setActiveKey && setActiveKey('popular');
            }}
          >
            Popular Categories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="all"
            className="fw-semi-bold me-3 fs-8 pe-2 text-center"
            onClick={() => setActiveKey && setActiveKey('all')}
          >
            All Categories
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default FaqTab;
