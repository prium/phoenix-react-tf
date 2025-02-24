import { File, fileCollection as filesData } from 'data/file-manager';
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useContext,
  useEffect
} from 'react';

interface FileManagerContextInterface {
  fileCollection: File[];
  setFileCollection: Dispatch<SetStateAction<File[]>>;
  showFileDetails: boolean;
  setShowFileDetails: Dispatch<SetStateAction<boolean>>;
  checkedFileIds: number[];
  setCheckedFileIds: Dispatch<SetStateAction<number[]>>;
}

export const FileManagerContext = createContext(
  {} as FileManagerContextInterface
);

const FileManagerProvider = ({ children }: PropsWithChildren) => {
  const [fileCollection, setFileCollection] = useState<File[]>([]);
  const [showFileDetails, setShowFileDetails] = useState(true);
  const [checkedFileIds, setCheckedFileIds] = useState<number[]>([]);

  useEffect(() => {
    setFileCollection(filesData);
  }, []);

  return (
    <FileManagerContext.Provider
      value={{
        fileCollection,
        setFileCollection,
        showFileDetails,
        setShowFileDetails,
        checkedFileIds,
        setCheckedFileIds
      }}
    >
      {children}
    </FileManagerContext.Provider>
  );
};

export const useFileManagerContext = () => useContext(FileManagerContext);

export default FileManagerProvider;
