import FileManagerContent from 'components/modules/file-manager/FileManagerContent';
import FileManagerLayout from 'layouts/FileManagerLayout';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { useEffect } from 'react';

const ListView = () => {
  const { setIsGridView, setInitialTableState, setCheckedFileIds } =
    useFileManagerContext();
  useEffect(() => {
    setIsGridView(false);
    setInitialTableState({});
    setCheckedFileIds([]);
  }, []);

  return (
    <FileManagerLayout>
      <FileManagerContent />
    </FileManagerLayout>
  );
};

export default ListView;
