import {
  faChevronLeft,
  faCircle,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Tab } from 'react-bootstrap';
import { Dispatch, SetStateAction } from 'react';
import { FaqCategory } from 'data/faq';

interface SubCategoryContentProps {
  setOpenTab: Dispatch<SetStateAction<boolean>>;
  categories: FaqCategory[];
}

const SubCategoryContent = ({
  setOpenTab,
  categories
}: SubCategoryContentProps) => {
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
      {categories.map(category => (
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

export default SubCategoryContent;
