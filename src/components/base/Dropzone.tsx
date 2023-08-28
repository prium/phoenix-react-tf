import classNames from 'classnames';
import {
  Accept,
  DropEvent,
  FileRejection,
  DropzoneProps as ReactDropZoneProps,
  useDropzone
} from 'react-dropzone';
import Button from './Button';
import imageIcon from 'assets/img/icons/image-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import Attachment, { FileAttachment } from 'components/common/Attachment';
import { convertFileToAttachment } from 'helpers/utils';

interface DropzoneProps extends ReactDropZoneProps {
  className?: string;
  size?: 'sm';
  accept?: Accept;
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
}

const Dropzone = ({
  className,
  size,
  onDrop,
  accept,
  ...rest
}: DropzoneProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<FileAttachment[]>([]);

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((file, ind) => index !== ind));
    setPreviews(previews.filter((file, ind) => index !== ind));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (...args) => {
      const [acceptedFiles] = args;
      setFiles(acceptedFiles);
      setPreviews(acceptedFiles.map(file => convertFileToAttachment(file)));
      if (onDrop) {
        onDrop(...args);
      }
    },
    accept,
    ...rest
  });

  const imageOnly = useMemo(() => {
    return Boolean(accept && accept['image/*']);
  }, [accept]);

  return (
    <>
      {imageOnly && (
        <div className="d-flex flex-wrap gap-2 mb-2">
          {files.map((file, index) => (
            <div className="dropzone-file-preview" key={file.name}>
              <img src={URL.createObjectURL(file)} alt="" />
              <button
                className="btn close-btn"
                onClick={() => handleRemoveFile(index)}
              >
                <FontAwesomeIcon icon="xmark" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div
        {...getRootProps()}
        className={classNames(className, 'dropzone', {
          'dropzone-sm': size === 'sm'
        })}
      >
        <input {...getInputProps()} />
        <div className="text-600 fw-bold fs-9">
          Drag your {imageOnly ? 'photo' : 'files'} here{' '}
          <span className="text-800">or </span>
          <Button variant="link" className="p-0">
            Browse from device
          </Button>
          <br />
          <img
            className="mt-3"
            src={imageIcon}
            width={classNames({ 24: size === 'sm', 40: size !== 'sm' })}
            alt=""
          />
        </div>
      </div>
      {!imageOnly &&
        previews.map((file, index) => (
          <div
            key={index}
            className={classNames(
              'border-bottom d-flex align-items-center justify-content-between py-3'
            )}
          >
            <Attachment attachment={file} />

            <button className="btn p-0" onClick={() => handleRemoveFile(index)}>
              <FontAwesomeIcon icon="trash-alt" className="fs-0 text-danger" />
            </button>
          </div>
        ))}
    </>
  );
};

export default Dropzone;
