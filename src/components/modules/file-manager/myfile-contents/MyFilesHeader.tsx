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
import classNames from 'classnames';
import { useFileManagerContext } from 'providers/FileManagerProvider';

const MyFilesHeader = () => {
  const { isGridView, setIsGridView } = useFileManagerContext();

  return (
    <Row className="g-3 flex-between-center">
      <Col xs="auto">
        <h5 className="mb-0">My Files</h5>
      </Col>
      <Col xs="auto" className="d-flex">
        <OverlayTrigger overlay={<Tooltip>Grid view</Tooltip>}>
          <Button
            onClick={() => setIsGridView(true)}
            variant="phoenix-secondary"
            className={classNames('btn-square me-2', {
              'border-primary text-primary': isGridView
            })}
          >
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip>List view</Tooltip>}>
          <Button
            onClick={() => {
              setIsGridView(false);
            }}
            variant="phoenix-secondary"
            className={classNames('btn-square', {
              'border-primary text-primary': !isGridView
            })}
          >
            <FontAwesomeIcon icon={faList} />
          </Button>
        </OverlayTrigger>

        <Form.Select className="form-select mx-2 mx-sm-3">
          <option>Sort by - Date created</option>
          <option>Sort by - Name</option>
          <option>Sort by - Size</option>
        </Form.Select>

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
