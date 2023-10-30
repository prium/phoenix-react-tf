import FaqCategoryCard from 'components/cards/FaqCategoryCard';
import { FaqCategory } from 'data/faq';
import { Dispatch, SetStateAction } from 'react';
import { Col, Nav } from 'react-bootstrap';

interface SubCategoryTabProps {
  categories: FaqCategory[];
  categoryType?: string;
  setOpenTab?: Dispatch<SetStateAction<boolean>>;
  setActiveKey?: Dispatch<SetStateAction<string>>;
  setSubCategoryActiveKey?: Dispatch<SetStateAction<string>>;
  subCategoryActiveKey?: string;
}

const SubCategoryTab = ({
  categories,
  categoryType,
  setOpenTab,
  setActiveKey,
  setSubCategoryActiveKey,
  subCategoryActiveKey
}: SubCategoryTabProps) => {
  return (
    <Col md={6} xl={5} xxl={4}>
      <Nav
        className="faq-subcategory-tab w-sm-75 w-md-100 mx-auto mb-4 gap-3"
        style={{ width: '90%' }}
      >
        {categoryType === 'popular' &&
          categories.map(
            category =>
              category.category === 'popular' && (
                <Nav.Item
                  onClick={() => {
                    setOpenTab && setOpenTab(false);
                    setActiveKey && setActiveKey(categoryType);
                    setSubCategoryActiveKey &&
                      setSubCategoryActiveKey(category.id);
                  }}
                  key={category.id}
                  className="w-100"
                >
                  <FaqCategoryCard
                    subCategoryActiveKey={subCategoryActiveKey}
                    category={category}
                  />
                </Nav.Item>
              )
          )}
        {categoryType === 'all' &&
          categories.map(category => (
            <Nav.Item
              onClick={() => {
                setOpenTab && setOpenTab(false);
                setActiveKey && setActiveKey(categoryType);
                setSubCategoryActiveKey && setSubCategoryActiveKey(category.id);
              }}
              key={category.id}
              className={`w-100`}
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

export default SubCategoryTab;
