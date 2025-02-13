import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faList } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface MyFilesHeaderProps {
  page: 'grid-view' | 'list-view';
}

const MyFilesHeader = ({ page }: MyFilesHeaderProps) => {
  return (
    <Row className="g-3 flex-between-center">
      <Col xs="auto">
        <h5 className="mb-0">My Files</h5>
      </Col>
      <Col xs="auto" className="d-flex">
        {/* Grid view button */}
        <OverlayTrigger overlay={<Tooltip>Grid view</Tooltip>}>
          <Button
            as={Link}
            to="file-grid-view"
            variant="phoenix-secondary"
            className={classNames('btn-square me-2', {
              'border-primary text-primary': page === 'grid-view'
            })}
          >
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </Button>
        </OverlayTrigger>

        {/* List view button */}
        <OverlayTrigger overlay={<Tooltip>List view</Tooltip>}>
          <Button
            as={Link}
            to="file-list-view"
            variant="phoenix-secondary"
            className={classNames('btn-square', {
              'border-primary text-primary': page === 'list-view'
            })}
          >
            <FontAwesomeIcon icon={faList} />
          </Button>
        </OverlayTrigger>

        {/* Sort dropdown */}
        <Form.Select className="form-select mx-2 mx-sm-3">
          <option>Sort by - Date created</option>
          <option>Sort by - Name</option>
          <option>Sort by - Size</option>
        </Form.Select>

        {/* View as group switch */}
        <OverlayTrigger overlay={<Tooltip>View as group</Tooltip>}>
          <Form.Check
            type="switch"
            id="viewAsGroup"
            className="mb-0 d-flex align-items-center"
          />
        </OverlayTrigger>
      </Col>
    </Row>
  );
};

export default MyFilesHeader;
