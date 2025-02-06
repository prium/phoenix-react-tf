import {
  faAdd,
  faBars,
  faCloudArrowUp,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import React, { Dispatch, SetStateAction } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
interface FileHeaderProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  openOffcanvas: boolean;
  setOpenOffcanvas: Dispatch<SetStateAction<boolean>>;
}

const FilesHeader = ({
  showSidebar,
  setShowSidebar,
  openOffcanvas,
  setOpenOffcanvas
}: FileHeaderProps) => {
  const { breakpoints } = useBreakpoints();
  console.log(showSidebar);

  return (
    <>
      <Row className="g-3 flex-between-center">
        <Col xs="auto" className="d-flex gap-2">
          <Button
            variant="phoenix-secondary"
            className="btn-square d-xl-none"
            onClick={() => {
              setOpenOffcanvas(true), setShowSidebar(!showSidebar);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Button variant="primary" className="px-sm-6">
            <FontAwesomeIcon icon={faCloudArrowUp} className="me-2" />
            Upload
          </Button>
          <Button variant="link" className="text-body-secondary px-2">
            <FontAwesomeIcon icon={faAdd} className="me-2" />
            Add New Folder
          </Button>
        </Col>
        <Col xs="auto" className="d-flex gap-2">
          <Form.Select className="w-auto">
            <option value="1">Last 7 days</option>
            <option value="1">Last 15 days</option>
            <option value="1">Last 30 days</option>
          </Form.Select>
          <Button variant="phoenix-primary" className="btn-square">
            <FontAwesomeIcon icon={faFilter} />
          </Button>
        </Col>
      </Row>
      {breakpoints.down('lg') && (
        <PhoenixOffcanvas
          open={openOffcanvas}
          onHide={() => setOpenOffcanvas(false)}
          className="phoenix-offcanvas phoenix-offcanvas-content scrollbar bg-body overflow-x-hidden"
          placement="start"
          fixed
        >
          <Sidebar setOpenOffcanvas={setOpenOffcanvas} />
        </PhoenixOffcanvas>
      )}
    </>
  );
};

export default FilesHeader;
