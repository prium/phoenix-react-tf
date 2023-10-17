import bg from 'assets/img/bg/bg-40.png';
import bgDark from 'assets/img/bg/bg-dark-40.png';
import { Link } from 'react-router-dom';
import SearchBox from 'components/common/SearchBox';
import { Col, Row, Tab } from 'react-bootstrap';
import { faqCategories } from 'data/faq';
import { useState } from 'react';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import CategoryTab from 'components/modules/faq/CategoryTab';
import SubCategoryTab from 'components/modules/faq/SubCategoryTab';
import SubCategoryContent from 'components/modules/faq/SubCategoryContent';

const FaqTab = () => {
  const [activeKey, setActiveKey] = useState('all');
  const [subCategoryActiveKey, setSubCategoryActiveKey] = useState('sale-101');
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
        onSelect={(key: any) => setActiveKey(key)}
        activeKey={activeKey}
      >
        <Row className="gx-xl-8 gx-xxl-11 gy-6">
          {breakpoints.up('md') && <CategoryTab />}
          <Col
            md={6}
            xl={7}
            xxl={8}
            className="empty-header d-none d-md-block"
          />
          <Col xs={12} className="m-0">
            <Tab.Container
              defaultActiveKey={subCategoryActiveKey}
              onSelect={(key: any) => setSubCategoryActiveKey(key)}
              id="sub-category"
              activeKey={subCategoryActiveKey}
            >
              <Row className="gx-xl-8 gx-xxl-11 gy-6">
                {breakpoints.up('md') && (
                  <SubCategoryTab
                    categoryType={activeKey}
                    categories={faqCategories}
                  />
                )}
                <Col md={6} xl={7} xxl={8}>
                  <SubCategoryContent
                    setOpenTab={setOpenTab}
                    categories={faqCategories}
                  />
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
                <Row className="g-0">
                  <CategoryTab setActiveKey={setActiveKey} />
                  <SubCategoryTab
                    categories={faqCategories}
                    categoryType={activeKey}
                    setOpenTab={setOpenTab}
                    setActiveKey={setActiveKey}
                    setSubCategoryActiveKey={setSubCategoryActiveKey}
                    subCategoryActiveKey={subCategoryActiveKey}
                  />
                </Row>
              </PhoenixOffcanvas>
            )}
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default FaqTab;
