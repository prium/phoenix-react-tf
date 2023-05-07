import classNames from 'classnames';
import {
  DropEvent,
  FileRejection,
  DropzoneProps as ReactDropZoneProps,
  useDropzone
} from 'react-dropzone';
import Button from './Button';
import imageIcon from 'assets/img/icons/image-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface DropzoneProps extends ReactDropZoneProps {
  className?: string;
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
}

const Dropzone = ({ className, onDrop, ...rest }: DropzoneProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((file, ind) => index !== ind));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (...args) => {
      setFiles(args[0]);
      if (onDrop) {
        onDrop(...args);
      }
    },
    ...rest
  });

  return (
    <>
      {files.length > 0 && (
        <div className="d-flex flex-wrap gap-2 mb-2">
          {files.map((file, index) => (
            <div className="dropzone-file-preview">
              <img src={URL.createObjectURL(file)} alt="" />
              <button className="btn close-btn" onClick={() => handleRemoveFile(index)}>
                <FontAwesomeIcon icon="xmark" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div {...getRootProps()} className={classNames(className, 'dropzone')}>
        <input {...getInputProps()} />
        <div className="text-600 fw-bold fs-9">
          Drag your photo here <span className="text-800">or </span>
          <Button variant="link" className="p-0">
            Browse from device
          </Button>
          <br />
          <img className="mt-3" src={imageIcon} width={24} alt="" />
        </div>
      </div>
    </>
  );
};

export default Dropzone;
