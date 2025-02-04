import FilesPreviewCard from 'components/modules/file-manager/FilesPreviewCard';
import FileManagerLayout from 'layouts/FileManagerLayout';
import React from 'react';

const GridView = () => {
  return (
    <FileManagerLayout page="grid-view">
      <FilesPreviewCard />
    </FileManagerLayout>
  );
};

export default GridView;
