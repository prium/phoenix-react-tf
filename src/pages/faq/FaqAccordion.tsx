import SearchBox from 'components/common/SearchBox';
import { faqs } from 'data/faq';
import React from 'react';
import { Accordion, Breadcrumb } from 'react-bootstrap';
import FaqCta from './FaqCta';
import { Link } from 'react-router-dom';

const FaqAccordion = () => {
  return (
    <div>
      <Breadcrumb className="mb-2">
        <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
        <Breadcrumb.Item active>Faq</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="mb-5">FAQ</h2>
      <h5 className="mb-3">How can we help?</h5>
      <p className="text-700">
        Search for the topic you need help with or
        <Link to="#!">contact our support</Link>
      </p>
      <SearchBox
        placeholder="Search"
        className="w-50 mb-8"
        style={{ maxWidth: '24rem' }}
      />
      <Accordion className="" defaultActiveKey="0">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={String(index)} key={faq.id}>
            <Accordion.Header>{faq.title}</Accordion.Header>
            <Accordion.Body dangerouslySetInnerHTML={{ __html: faq.details }} />
          </Accordion.Item>
        ))}
      </Accordion>
      <FaqCta />
    </div>
  );
};

export default FaqAccordion;
