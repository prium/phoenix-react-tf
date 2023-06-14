import React, { ElementType, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface SeeMoreTextProps {
  as?: ElementType;
  className?: string;
  maxChars: number;
}

const SeeMoreText = ({
  children,
  as: Tag = 'p',
  className,
  maxChars
}: PropsWithChildren<SeeMoreTextProps>) => {
  console.log({ children: (children as string)?.length });

  return (
    <Tag className={className}>
      {children}
      {(children as string)?.length > maxChars && (
        <>
          <>...</>
          <Link to="#!" className="fw-semi-bold">
            see more
          </Link>
        </>
      )}
    </Tag>
  );
};

export default SeeMoreText;
