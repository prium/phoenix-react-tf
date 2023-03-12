import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'components/layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';

const exampleCode = `
<Breadcrumb className="mb-0">
    <Breadcrumb.Item href="#!">Item 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#!">Item 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#!">Item 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#!" active>
        Item 4
    </Breadcrumb.Item>
</Breadcrumb>`;

const BackgroundExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Background"
        description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid colors" />
          <PhoenixDocCard.Body>
            <Row className="g-0">
              {[
                'primary',
                'secondary',
                'success',
                'info',
                'warning',
                'danger',
                'light',
                'dark'
              ].map((color, index) => (
                <Col xs={6} sm={4} lg={3} key={index}>
                  <div className={`flex-center p-3 bg-${color}`} style={{ height: '180px' }}>
                    <div>
                      <code className={color === 'light' ? 'text-black' : 'text-white'}>
                        .text-{color}
                      </code>
                      <br />
                      <code className={color === 'light' ? 'text-black' : 'text-white'}>
                        .bg-{color}
                      </code>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BackgroundExample;
