import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FilesHeader from 'components/modules/file-manager/FilesHeader';
import Sidebar from 'components/modules/file-manager/sidebar/Sidebar';
import RecentFilesCard from 'components/modules/file-manager/RecentFilesCard';
import { defaultBreadcrumbItems } from 'data/commonData';
import React, { PropsWithChildren, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FileManagerProvider from 'providers/FileManagerProvider';
interface FileManagerLayoutProps {
  page: 'grid-view' | 'list-view';
}

const FileManagerLayout = ({
  children,
  page
}: PropsWithChildren<FileManagerLayoutProps>) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <h2 className="mb-4">File Manager</h2>
      <Row
        className={`gx-4 data-collapse-file-manager-sidebar mb-9 ${
          showSidebar ? 'show-sidebar' : ''
        }`}
      >
        <Col
          xs="auto"
          className="file-manager-sidebar-wrapper d-none d-lg-block "
        >
          <Sidebar setOpenOffcanvas={setOpenOffcanvas} />
        </Col>
        <Col className="my-files">
          <FilesHeader
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            openOffcanvas={openOffcanvas}
            setOpenOffcanvas={setOpenOffcanvas}
          />
          <RecentFilesCard />
          <FileManagerProvider>{children}</FileManagerProvider>
        </Col>
      </Row>
    </div>
  );
};

export default FileManagerLayout;
