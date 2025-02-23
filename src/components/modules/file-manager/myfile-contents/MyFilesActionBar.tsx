import React, { Dispatch, SetStateAction } from 'react';
import { Dropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faDownload,
  faTrash,
  faShareNodes,
  faEllipsis,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { myFiles } from 'data/file-manager';

interface ActionBarProps {
  showFileDetails: boolean;
  setShowFileDetails: Dispatch<SetStateAction<boolean>>;
  filesId: number[];
  setFilesId: Dispatch<SetStateAction<number[]>>;
}

const MyFilesActionBar = ({
  showFileDetails,
  setShowFileDetails,
  filesId,
  setFilesId
}: ActionBarProps) => {
  return (
    <div className="myfiles-action-bar mx-n4 mb-4">
      {filesId.length == 0 && (
        <h6
          className="mb-0 text-body-tertiary"
          id="file-manager-replace-element"
        >
          Total {myFiles.length} items
        </h6>
      )}

      {/* -------- */}
      <div
        id="file-manager-actions"
        className={filesId.length ? 'd-block' : 'd-none'}
      >
        <div className="d-flex align-items-center">
          <Button
            variant="phoenix-secondary"
            className="p-0 fs-8 me-2 me-sm-3"
            data-remove-bulk-check
          >
            <FontAwesomeIcon
              onClick={() => setFilesId([])}
              icon={faXmark}
              transform="down-1"
            />
          </Button>
          <h6
            className="mb-0 me-4 text-nowrap text-body-tertiary"
            data-files-selected
          >
            {filesId.length} item selected
          </h6>
          <div className="d-flex gap-1 gap-sm-2">
            <Button
              variant="phoenix-secondary"
              className="fs-10 btn-square-sm d-none d-sm-block"
              data-bs-toggle="tooltip"
              title="Download"
            >
              <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Button
              variant="phoenix-secondary"
              className="fs-10 btn-square-sm d-none d-sm-block"
              data-bs-toggle="tooltip"
              title="Delete"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button
              variant="phoenix-secondary"
              className="fs-10 btn-square-sm d-none d-sm-block"
              data-bs-toggle="tooltip"
              title="Share"
            >
              <FontAwesomeIcon icon={faShareNodes} />
            </Button>
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="phoenix-secondary"
                className="fs-10 btn-square-sm dropdown-caret-none"
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu-end"
                style={{ zIndex: 6 }}
              >
                <Dropdown.Item href="#">Share</Dropdown.Item>
                <Dropdown.Item href="#">Download</Dropdown.Item>
                <Dropdown.Item href="#">Duplicate</Dropdown.Item>
                <Dropdown.Item href="#">Move</Dropdown.Item>
                <Dropdown.Item href="#">Rename</Dropdown.Item>
                <Dropdown.Item href="#">Move to Bin</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#" className="text-danger">
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* -------- */}
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="file-details-tooltip">File Details</Tooltip>}
      >
        <Button
          variant="phoenix-secondary"
          className="fs-10 btn-square-sm"
          data-toggle-file-details
          onClick={() => setShowFileDetails(!showFileDetails)}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </OverlayTrigger>
      {/* <Button
        variant="phoenix-secondary"
        className="fs-10 btn-square-sm d-xxl-none"
        data-toggle-file-details
        data-bs-toggle="tooltip"
        title="File Details"
        data-phoenix-toggle="offcanvas"
        data-phoenix-target="#showFileDetails"
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </Button> */}
    </div>
  );
};

export default MyFilesActionBar;
