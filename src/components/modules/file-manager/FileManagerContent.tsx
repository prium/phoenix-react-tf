import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import MyFilesHeader from './myfile-contents/MyFilesHeader';
import FileBox from './myfile-contents/FileBox';
import MyFilesActionBar from './myfile-contents/MyFilesActionBar';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import FileDetails from './myfile-contents/FileDetails';
import classNames from 'classnames';
import { myFiles } from 'data/file-manager';

const FileManagerContent = () => {
  const [showFileDetails, setShowFileDetails] = useState(true);
  const [filesId, setFilesId] = useState<number[]>([]);
  console.log(filesId);

  const { breakpoints } = useBreakpoints();

  return (
    <>
      <Card className="mt-5">
        <Card.Header>
          <MyFilesHeader page="grid-view" />
        </Card.Header>
        <Card.Body className="pt-0">
          <MyFilesActionBar
            showFileDetails={showFileDetails}
            setShowFileDetails={setShowFileDetails}
            filesId={filesId}
            setFilesId={setFilesId}
          />
          <Row className="gx-xxl-9" id="bulk-select-body">
            <Col>
              <div className="files-container" data-files-container>
                {myFiles.map(file => (
                  <FileBox file={file} key={file.id} setFilesId={setFilesId} />
                ))}
              </div>
            </Col>
            {breakpoints.up('xxl') && (
              <Col
                xs="auto"
                className={classNames(
                  'px-0 px-xxl-5 border-start-xxl border-translucent',
                  {
                    'd-xxl-none': !showFileDetails
                  }
                )}
              >
                <div className="file-details-wrapper">
                  <FileDetails filesId={filesId} />
                </div>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
      {breakpoints.down('xxl') && (
        <PhoenixOffcanvas
          open={showFileDetails}
          onHide={() => setShowFileDetails(false)}
          className="phoenix-offcanvas-content file-details-wrapper scrollbar bg-body-emphasis overflow-x-hidden"
          placement="end"
          fixed
        >
          <FileDetails filesId={filesId} />
        </PhoenixOffcanvas>
      )}
    </>
  );
};

export default FileManagerContent;
