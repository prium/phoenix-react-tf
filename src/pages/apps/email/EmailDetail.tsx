import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import EmailLayout from 'components/modules/email/EmailLayout';
import {
  Card,
  Col,
  Dropdown,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import team60 from 'assets/img/team/60.webp';
import generic41 from 'assets/img/generic/41.png';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Link } from 'react-router-dom';

const OverlayButton = ({ title, icon }: { title: string; icon: IconProp }) => {
  return (
    <OverlayTrigger overlay={<Tooltip>{title}</Tooltip>} placement="top">
      <div>
        <Button className="p-0">
          <FontAwesomeIcon icon={icon} className="text-500" />
        </Button>
      </div>
    </OverlayTrigger>
  );
};

const EmailDetail = () => {
  return (
    <EmailLayout page="detail">
      <Col>
        <Card className="email-content">
          <Card.Header className="border-0">
            <div className="d-flex flex-between-center pb-3 border-bottom">
              <Button
                as={Link}
                to="/apps/email/inbox"
                variant="link"
                className="p-0 text-800 me-3"
              >
                <FontAwesomeIcon icon="angle-left" className="fw-bolder fs-8" />
              </Button>
              <h3 className="flex-1 mb-0 lh-sm line-clamp-1">
                Query about recently purchased soccer socks
              </h3>

              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Download</Dropdown.Item>
                  <Dropdown.Item>Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
          </Card.Header>
          <Card.Body className="p-0 pb-4 scrollbar">
            <div className="email-detail-content px-4">
              <Row className="align-items-center gy-3 gx-2 mb-10">
                <Col
                  xs={12}
                  sm="auto"
                  className="d-flex gap-4 gap-lg-3 gap-xl-4 order-sm-1"
                >
                  <OverlayButton title="Reply" icon="reply" />
                  <OverlayButton title="Remove" icon="trash-can" />
                  <OverlayButton title="Archive" icon="archive" />
                  <OverlayButton title="Print" icon="print" />
                  <OverlayButton title="Star" icon={['far', 'star']} />
                </Col>
                <Col xs="auto">
                  <Avatar src={team60} size="xl" />
                </Col>
                <Col xs="auto" className="flex-1">
                  <div className="d-flex mb-1">
                    <h5 className="mb-0 text-1000 me-2">Jessica Ball</h5>
                    <p className="mb-0 lh-sm text-600 fs-9 d-none d-md-block text-nowrap">
                      &lt; jessica.ball@email.com &gt;
                    </p>
                  </div>
                  <p className="mb-0 fs-9">
                    <span className="text-600 me-1">to</span>
                    <span className="fw-bold text-800 me-1">Me</span>
                    <span className="text-1000 fw-semi-bold fs-10 me-1">
                      28 Aug, 2021
                    </span>
                    <span className="fw-semi-bold text-900 fs-10 me-1">
                      6:32 PM
                    </span>
                    <FontAwesomeIcon
                      icon={['far', 'star']}
                      className="text-500"
                    />
                  </p>
                </Col>
              </Row>
              <div className="text-1000 fs-9 w-100 w-md-75 mb-8">
                <p>Dear Simp sons,</p>
                <p>
                  Something in a thirty-acre thermal thicket of thorns and
                  thistles thumped and thundered threatening the three-D
                  thoughts of Matthew the thug - although, theatrically, it was
                  only the thirteen-thousand thistles and thorns through the
                  underneath of his thigh that the thirty year old thug thought
                  of that morning.
                </p>
                <p>
                  How much caramel can a canny canonball cram in a camel if a
                  canny canonball can cram caramel in a camel? If practice makes
                  perfect and perfect needs practice, I’m perfectly practiced
                  and practically perfect.
                </p>
                <p className="mb-0">Best regards,</p>
                <p>Jess</p>
              </div>
              <div className="d-flex align-items-center mb-5">
                <Button
                  variant="link"
                  className="text-1000 fs-8 text-decoration-none p-0"
                  type="button"
                  startIcon={
                    <FontAwesomeIcon icon="paperclip" className="me-2" />
                  }
                >
                  2 Attachments
                </Button>
              </div>
              <Row className="pb-11 border-bottom mb-4 gx-0 gy-2">
                <Col xs="auto" className="me-3">
                  <a
                    href="#!"
                    className="text-decoration-none d-flex align-items-center"
                  >
                    <div className="btn-icon btn-icon-xl border border-400 rounded-3 text-400 flex-column me-2">
                      <FontAwesomeIcon icon="file" className="fs-8 mb-1" />
                      <p className="mb-0 fs-10 fw-bold">PDF</p>
                    </div>
                    <div>
                      <h6 className="text-1000">workflow-data.pdf</h6>
                      <p className="fs-9 mb-0 text-700 lh-1">53.34 KB</p>
                    </div>
                  </a>
                </Col>
                <Col xs="auto">
                  <a
                    href="#!"
                    className="text-decoration-none d-flex align-items-center"
                  >
                    <img src={generic41} alt="..." className="rounded" />
                    <div className="ms-2">
                      <h6 className="text-1000">forest.jpg</h6>
                      <p className="fs-9 mb-0 text-700">53.34 KB</p>
                    </div>
                  </a>
                </Col>
              </Row>
              <div className="d-flex justify-content-between">
                <Button
                  variant="phoenix-secondary"
                  className="me-1 text-nowrap px-2 px-sm-4"
                  endIcon={
                    <FontAwesomeIcon icon="reply" className="ms-2 fs-10" />
                  }
                >
                  Reply
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="me-1 text-nowrap px-2 px-sm-4"
                  endIcon={
                    <FontAwesomeIcon icon="reply-all" className="ms-2 fs-10" />
                  }
                >
                  Reply All
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="ms-auto text-nowrap px-2 px-sm-4"
                  endIcon={
                    <FontAwesomeIcon icon="share" className="ms-2 fs-10" />
                  }
                >
                  Forward
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </EmailLayout>
  );
};

export default EmailDetail;
