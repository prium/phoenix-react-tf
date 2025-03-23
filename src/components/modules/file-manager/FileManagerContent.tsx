/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Row, Col } from 'react-bootstrap';
import MyFilesHeader from './myfile-contents/MyFilesHeader';
import FileBox from './myfile-contents/FileBox';
import MyFilesActionBar from './myfile-contents/MyFilesActionBar';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import FileDetails from './myfile-contents/FileDetails';
import classNames from 'classnames';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useEffect, useState } from 'react';
import { File } from 'data/file-manager';
import GridGroupView from './myfile-contents/GridGroupView';
import AdvanceTable from 'components/base/AdvanceTable';
import ListViewGroupTable from '../../tables/ListViewGroupTable';

const FileManagerContent = () => {
  const {
    showFileDetails,
    setShowFileDetails,
    isGridView,
    checkedFileIds,
    fileCollection,
    isGrouped
  } = useFileManagerContext();
  const { breakpoints } = useBreakpoints();
  const [data, setData] = useState<File[]>([]);
  const table = useAdvanceTableContext();

  useEffect(() => {
    setData(table.getRowModel().rows.map(item => item.original) as File[]);
  }, [table]);

  useEffect(() => {
    if (isGridView) {
      const state = fileCollection.reduce(
        (acc, file, index) => {
          acc[index] = checkedFileIds.includes(file.id);
          return acc;
        },
        {} as Record<number, boolean>
      );
      table?.setRowSelection(state);
    }
  }, [checkedFileIds]);

  return (
    <>
      <Card className="mt-5">
        <Card.Header className="py-3 px-4">
          <MyFilesHeader />
        </Card.Header>
        <Card.Body className="pt-0">
          <MyFilesActionBar />
          <Row className="gx-xxl-9">
            {isGridView ? (
              <Col>
                {isGrouped ? (
                  <GridGroupView data={data} />
                ) : (
                  <div className="files-container">
                    {data.map((file: File) => (
                      <FileBox file={file} key={file.id} />
                    ))}
                  </div>
                )}
              </Col>
            ) : (
              <Col className="my-files-table">
                {isGrouped ? (
                  <ListViewGroupTable
                    tableProps={{
                      className: 'phoenix-table fs-9 mb-0 border-translucent'
                    }}
                    rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
                  />
                ) : (
                  <AdvanceTable
                    tableProps={{
                      className: 'phoenix-table fs-9 mb-0 border-translucent'
                    }}
                    rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
                  />
                )}
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
          <Button className="fs-8 position-absolute top-0 end-0 mt-3">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowFileDetails(false)}
            />
          </Button>
          <FileDetails />
        </PhoenixOffcanvas>
      )}
    </>
  );
};

export default FileManagerContent;
