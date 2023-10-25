import {
  faImage,
  faPalette,
  faPlus,
  faShuffle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Col, Form, FormCheck, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import kanban1 from 'assets/img/kanban/bg1.jpg';
import kanban2 from 'assets/img/kanban/bg2.jpg';
import kanban3 from 'assets/img/kanban/bg3.jpg';
import kanban4 from 'assets/img/kanban/bg4.jpg';
import kanban5 from 'assets/img/kanban/bg5.jpg';
import kanban6 from 'assets/img/kanban/bg6.jpg';
import Dropzone from 'components/base/Dropzone';

const colors = [
  '#ffffff',
  '#F5F8FF',
  '#EFF2F6',
  '#E3E6ED',
  '#CBD0DD',
  '#85A9FF',
  '#60C6FF',
  '#90D67F',
  '#F48270',
  '#FFCC85',
  '#3874FF',
  '#0097EB',
  '#25B003',
  '#EC1F00',
  '#E5780B',
  '#004DFF',
  '#0080C7',
  '#23890B',
  '#CC1B00',
  '#D6700A',
  '#000000',
  '#222834'
];
const ColorCheckbox = ({ color }: { color: string }) => {
  return (
    <FormCheckInput
      className="checkbox-color"
      type="radio"
      name="colors"
      style={{ backgroundColor: color }}
    />
  );
};

const ImageCheckbox = ({ img, id }: { img: string; id: string }) => {
  return (
    <>
      <input type="radio" id={id} className="d-none" />
      <label htmlFor={id}>
        <img
          className="me-2 cursor-pointer rounded-3 fit-cover w-100"
          src={img}
          style={{ height: 100 }}
        />
      </label>
    </>
  );
};

const BackgroundColorForm = () => {
  return (
    <div>
      <p className="mb-4">
        Select a <b>Background</b> Colour or Image. This will also be thumbnail
        for your Kanban board.{' '}
      </p>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="underline" className="border-bottom mb-10">
          <Nav.Item>
            <Nav.Link eventKey="first">
              <FontAwesomeIcon icon={faPalette} className="me-2" /> Solid Color
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">
              <FontAwesomeIcon icon={faImage} className="me-2" /> Image
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="d-flex flex-wrap gap-x-3 gap-y-4">
              {colors.map(color => (
                <ColorCheckbox color={color} key={color} />
              ))}
              <Button
                variant="outline-secondary"
                // size="sm"
                className="rounded-pill"
                startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
              >
                Custom Color
              </Button>
              <Button
                variant="outline-danger"
                // size="sm"
                className="rounded-pill"
                startIcon={
                  <FontAwesomeIcon icon={faShuffle} className="me-2" />
                }
              >
                Random
              </Button>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Row className="g-3 mb-4">
              <Col xs={6}>
                <ImageCheckbox img={kanban1} id="img1" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban2} id="img1" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban3} id="img1" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban4} id="img1" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban5} id="img1" />
              </Col>
              <Col xs={6}>
                <ImageCheckbox img={kanban6} id="img1" />
              </Col>
              <Col xs={12}>
                <Dropzone />
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default BackgroundColorForm;
