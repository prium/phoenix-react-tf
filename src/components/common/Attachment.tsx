import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { getFileIcon } from 'helpers/utils';
import React from 'react';

export interface FileAttachment {
  name: string;
  size: string;
  format: string;
  date?: string;
  preview?: string;
}

interface AttachmentProps {
  attachment: FileAttachment;
  type?: 'primary' | 'secondary';
  size?: 'lg' | 'xl';
}

const Attachment = ({
  attachment,
  type = 'primary',
  size = 'lg'
}: AttachmentProps) => {
  return (
    <a href="#!" className="text-decoration-none d-flex align-items-center">
      <div
        className={classNames(
          `btn-icon btn-icon-${size} rounded-3 flex-column me-2 overflow-hidden border`,
          {
            // border: !attachment.preview,
            'text-500 border-500': type === 'primary',
            'border-400 text-400': type === 'secondary'
          }
        )}
      >
        {attachment.preview ? (
          <img
            src={attachment.preview}
            alt={attachment.name}
            className="w-100"
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={getFileIcon(attachment.format)}
              className={classNames('fs-8 mb-1')}
            />
            <p className="mb-0 fs-10 fw-bold lh-1">{attachment.format}</p>
          </>
        )}
      </div>

      <div className="flex-1">
        <h6
          className={classNames('text-900 line-clamp-1', {
            'text-900': type === 'primary',
            'text-1000': type === 'secondary'
          })}
        >
          {attachment.name}
        </h6>
        <div
          className={classNames(
            'd-flex align-items-center lh-1 text-700 fw-semi-bold',
            {
              'fs-10': type == 'primary',
              'fs-9': type == 'secondary'
            }
          )}
        >
          <p className="mb-0">{attachment.size}</p>
          {attachment.date && (
            <>
              <FontAwesomeIcon
                icon="circle"
                className="text-500"
                transform="shrink-12"
              />
              <p className="mb-0">{attachment.date}</p>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default Attachment;
