import FileManagerContent from 'components/modules/file-manager/FileManagerContent';
import FileManagerLayout from 'layouts/FileManagerLayout';

const GridView = () => {
  return (
    <FileManagerLayout page="grid-view">
      <FileManagerContent />
    </FileManagerLayout>
  );
};

export default GridView;
