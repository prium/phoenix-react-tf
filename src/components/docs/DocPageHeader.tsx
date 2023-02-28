import React, { PropsWithChildren } from 'react';
import FeatherIcon from 'feather-icons-react';
import { capitalize } from 'helpers/utils';

interface DocPageHeaderProps {
  title: string;
  description?: string;
  link?: {
    url: string;
    text: string;
  };
}

const DocPageHeader = ({
  title,
  description,
  children,
  link
}: PropsWithChildren<DocPageHeaderProps>) => {
  return (
    <div className="mb-7">
      <h2 className="mb-2 lh-sm">{title}</h2>
      {description && <p className="text-700 lead mb-2">{description}</p>}
      {children}
      {link && (
        <a href={link.url} className="btn btn-link p-0" rel="noreferrer" target="_blank">
          {link.text}
          <FeatherIcon icon="chevron-right" size={16} />
        </a>
      )}
    </div>
  );
};

export default DocPageHeader;
