import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FilesHeader from 'components/modules/file-manager/FilesHeader';
import RecentFilesCard from 'components/modules/file-manager/RecentFilesCard';
import Sidebar from 'components/modules/file-manager/Sidebar';
import { defaultBreadcrumbItems } from 'data/commonData';
import React, { PropsWithChildren, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
interface FileManagerLayoutProps {
  page: 'grid-view' | 'list-view';
}

const FileManagerLayout = ({
  children,
  page
}: PropsWithChildren<FileManagerLayoutProps>) => {
  console.log({ page });
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
          className="file-manager-sidebar-column d-none d-xl-block "
        >
          <Sidebar setOpenOffcanvas={setOpenOffcanvas} />
        </Col>
        <Col className="my-files bg-white">
          <FilesHeader
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            openOffcanvas={openOffcanvas}
            setOpenOffcanvas={setOpenOffcanvas}
          />
          <RecentFilesCard />
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default FileManagerLayout;
