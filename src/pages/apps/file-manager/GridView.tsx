import FileManagerContent from 'components/modules/file-manager/FileManagerContent';
import FileManagerLayout from 'layouts/FileManagerLayout';
import React from 'react';

const GridView = () => {
  return (
    <FileManagerLayout page="grid-view">
      <FileManagerContent />
    </FileManagerLayout>
  );
};

export default GridView;
