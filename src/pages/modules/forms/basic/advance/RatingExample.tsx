import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'components/base/Rating';

const basicExampleCode = `
  function DefaultRatingExample() {
    return (
      <Rating />
    );
  }
`;
const initialRatingCode = `
  function InitialRatingExample() {
    return (
      <Rating 
        initialValue={3}
      />
    );
  }
`;
const readOnlyRatingCode = `
  function ReadOnlyRatingExample() {
    return (
      <Rating 
        readonly
        initialValue={2}
      />
    );
  }
`;
const changeColorCode = `
  function ColorRangeExample() {
    return (
      <Rating 
        fillIconColor = 'dark'
        emptyIconColor = 'gray-300'
        transition
      />
    );
  }
`;
const withTooltipCode = `
  function withTooltipExample() {
    return (
      <Rating 
        showTooltip
        allowFraction={false}
        tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
      />
    );
  }
`;
const rtlSupportCode = `
  function rtlSupportExample() {
    return (
      <Rating 
        rtl
      />
    );
  }
`;

const RatingExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Rating"
        description="React-Phoenix uses React Simple Rating as rating component. It's a simple react component for adding a star rating to your project."
        link={{
          text: 'Documentation for React Simple Rating',
          url: 'https://github.com/awran5/react-simple-star-rating'
        }}
      />
      <DocPagesLayout>
        <Row className="g-4">
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Basic Example" />
              <PhoenixDocCard.Body code={basicExampleCode} scope={{ Rating }} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Initial Rating" />
              <PhoenixDocCard.Body
                code={initialRatingCode}
                scope={{ Rating }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Read only rating" />
              <PhoenixDocCard.Body
                code={readOnlyRatingCode}
                scope={{ Rating }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="Change color" />
              <PhoenixDocCard.Body code={changeColorCode} scope={{ Rating }} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="With tooltip" />
              <PhoenixDocCard.Body code={withTooltipCode} scope={{ Rating }} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard>
              <PhoenixDocCard.Header title="RTL Support" />
              <PhoenixDocCard.Body code={rtlSupportCode} scope={{ Rating }} />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default RatingExample;
