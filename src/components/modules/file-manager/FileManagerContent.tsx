import { Card, Row, Col } from 'react-bootstrap';
import MyFilesHeader from './myfile-contents/MyFilesHeader';
import FileBox from './myfile-contents/FileBox';
import MyFilesActionBar from './myfile-contents/MyFilesActionBar';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import FileDetails from './myfile-contents/FileDetails';
import classNames from 'classnames';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import ListViewTable from './ListViewTable';
import { useEffect, useState } from 'react';

const FileManagerContent = () => {
  const {
    fileCollection,
    showFileDetails,
    setShowFileDetails,
    isGridView,
    checkedFileIds
  } = useFileManagerContext();
  const { breakpoints } = useBreakpoints();
  const [initialState, setInitialState] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const state = fileCollection.reduce(
      (acc, file, index) => {
        acc[index] = checkedFileIds.includes(file.id);
        return acc;
      },
      {} as Record<number, boolean>
    );

    setInitialState(state);
  }, [checkedFileIds]);

  return (
    <>
      <Card className="mt-5">
        <Card.Header>
          <MyFilesHeader />
        </Card.Header>
        <Card.Body className="pt-0">
          <MyFilesActionBar />
          <Row className="gx-xxl-9" id="bulk-select-body">
            {isGridView ? (
              <Col>
                <div className="files-container" data-files-container>
                  {fileCollection.map(file => (
                    <FileBox file={file} key={file.id} />
                  ))}
                </div>
              </Col>
            ) : (
              <Col>
                <div className="my-files-table" data-files-container>
                  <ListViewTable
                    files={fileCollection}
                    initialState={initialState}
                  />
                </div>
              </Col>
            )}

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
                  <FileDetails />
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
          <FileDetails />
        </PhoenixOffcanvas>
      )}
    </>
  );
};

export default FileManagerContent;
