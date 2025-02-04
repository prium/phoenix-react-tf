import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FilesHeader from 'components/modules/file-manager/FilesHeader';
import RecentFilesCard from 'components/modules/file-manager/RecentFilesCard';
import Sidebar from 'components/modules/file-manager/Sidebar';
import { defaultBreadcrumbItems } from 'data/commonData';
import React, { PropsWithChildren } from 'react';
import { Col, Row } from 'react-bootstrap';
interface FileManagerLayoutProps {
  page: 'grid-view' | 'list-view';
}

const FileManagerLayout = ({
  children,
  page
}: PropsWithChildren<FileManagerLayoutProps>) => {
  console.log({ page });
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4">File Manager</h2>
      <Row className="gx-4" data-collapse-file-manager-sidebar>
        <Col xs="auto" className="file-manager-sidebar">
          <Sidebar />
        </Col>
        <Col className="my-files">
          <FilesHeader />
          <RecentFilesCard />
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default FileManagerLayout;
