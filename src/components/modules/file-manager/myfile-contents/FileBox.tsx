import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faFileWord,
  faFileExcel,
  faFileInvoice,
  faFileZipper,
  faFilePdf,
  faFileCsv,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import FilesDropdown from '../FilesDropdown';
import classNames from 'classnames';
import { File } from 'data/file-manager';

const FileBox = ({
  file,
  setFilesId
}: {
  file: File;
  setFilesId: Dispatch<SetStateAction<number[]>>;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => setIsPlaying(prev => !prev);

  const renderFileIcon = () => {
    switch (file.type) {
      case 'folder':
        return (
          <FontAwesomeIcon
            icon={faFolder}
            className={classNames(
              'fs-3',
              file.id === 3 ? 'text-info-light' : 'text-body-tertiary'
            )}
          />
        );
      case 'doc':
        return (
          <FontAwesomeIcon
            icon={faFileWord}
            className="fs-3 text-body-tertiary"
          />
        );
      case 'xls':
      case 'xlx':
        return (
          <FontAwesomeIcon
            icon={faFileExcel}
            className="fs-3 text-body-tertiary"
          />
        );
      case 'source-code':
      case 'html':
        return (
          <FontAwesomeIcon
            icon={faFileInvoice}
            className="fs-3 text-body-tertiary"
          />
        );
      case 'zip':
        return (
          <FontAwesomeIcon
            icon={faFileZipper}
            className="fs-3 text-body-tertiary"
          />
        );
      case 'pdf':
        return (
          <FontAwesomeIcon
            icon={faFilePdf}
            className="fs-3 text-body-tertiary"
          />
        );
      case 'csv':
        return (
          <FontAwesomeIcon
            icon={faFileCsv}
            className="fs-3 text-body-tertiary"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="text-center"
      {...(file.type === 'video' && {
        onMouseEnter: () => setIsPlaying(true),
        onMouseLeave: () => setIsPlaying(false)
      })}
    >
      <div className="file-box-wrapper img-zoom-hover">
        <Form.Check.Input
          type="checkbox"
          className="form-check-input-transparent position-absolute top-0 start-0 mt-3 ms-3 z-1"
          name="fileManagerFiles"
          id={file.id.toString()}
          data-bulk-select-row
          data-file={file.id}
          onChange={e => {
            setFilesId(
              prevFilesId =>
                e.target.checked
                  ? [...prevFilesId, file.id] // Add ID when checked
                  : prevFilesId.filter(id => id !== file.id) // Remove ID when unchecked
            );
          }}
        />
        <Form.Check.Label
          htmlFor={file.id.toString()}
          className="stretched-link position-absolute top-0 start-0 w-100 h-100"
          data-file={file.id}
          {...(file.type === 'video' || file.type === 'image'
            ? {
                'data-file-thumbnail':
                  file.type === 'video' ? file.video : file.img
              }
            : {})}
        />
        <div className="position-relative h-100">
          <div className="file-box overflow-hidden">
            {file.type === 'image' && (
              <img
                src={file.img}
                alt=""
                className="w-100 h-100 object-fit-cover"
              />
            )}
            {file.type === 'video' && (
              <div className="video-container h-100">
                <video
                  className="video d-block h-100 w-100 overflow-hidden object-fit-cover"
                  muted
                  data-play-on-hover
                  ref={videoRef}
                  src={file.video}
                />
              </div>
            )}
            {renderFileIcon()}
          </div>
          {file.type === 'video' && (
            <Button
              className="p-0 circle-icon-item-md position-absolute top-50 start-50 translate-middle bg-body-emphasis bg-opacity-50 z-5"
              onClick={handlePlayPause}
            >
              <span className="play-icon pointer-events-none">
                {!isPlaying ? (
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-body-secondary fs-9"
                    transform="down-1"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPause}
                    className="text-body-secondary fs-9"
                    transform="down-1"
                  />
                )}
              </span>
            </Button>
          )}
        </div>
        <FilesDropdown className="lh-1 position-absolute top-0 end-0 mt-2 me-2" />
        <Link
          to="#!"
          className="d-block fw-bold text-body-highlight mt-2 text-nowrap text-truncate fs-9 fs-sm-8"
        >
          {file.name}
        </Link>
        <h6 className="mb-0 fw-semibold text-body-tertiary fs-10 fs-sm-9">
          {file.size || file.itemCount}
        </h6>
      </div>
    </div>
  );
};

export default FileBox;
