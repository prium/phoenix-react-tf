import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { files } from 'data/chat';
import { getFileIcon } from 'helpers/utils';

const SharedFiles = () => {
  return (
    <div className="d-flex gap-3 my-3">
      <FontAwesomeIcon icon="folder" className="fs-9" />
      <div className="flex-1">
        <h6 className="fw-semi-bold mb-2">Shared Files</h6>
        <div className="mb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className={classNames(
                'border-bottom d-flex align-items-center justify-content-between',
                {
                  'border-top': index === 0
                }
              )}
            >
              <a
                href="#!"
                className="text-decoration-none d-flex align-items-center py-3"
              >
                <div className="btn-icon btn-icon-lg border border-500 rounded-3 text-500 flex-column me-2">
                  <FontAwesomeIcon
                    icon={getFileIcon(file.format)}
                    className="fs-0 mb-1"
                  />
                  <p className="mb-0 fs-10 fw-bold lh-1">{file.format}</p>
                </div>
                <div className="flex-1">
                  <h6 className="text-900 line-clamp-1">{file.name}</h6>
                  <div className="d-flex align-items-center lh-1">
                    <p className="fs-10 mb-0 text-700 fw-semi-bold">
                      {file.size}
                    </p>

                    <FontAwesomeIcon
                      icon="circle"
                      className="text-500 fs-10"
                      transform="shrink-12"
                    />
                    <p className="fs-10 mb-0 text-700 fw-semi-bold">
                      {file.date}
                    </p>
                  </div>
                </div>
              </a>

              <button className="btn p-0">
                <FontAwesomeIcon
                  icon={['far', 'arrow-alt-circle-down']}
                  className="fs-0 text-700"
                />
              </button>
            </div>
          ))}
        </div>
        <Button
          variant="link"
          className="p-0 fs-10"
          endIcon={<FontAwesomeIcon icon="chevron-down" />}
        >
          See 19 more
        </Button>
      </div>
    </div>
  );
};

export default SharedFiles;
