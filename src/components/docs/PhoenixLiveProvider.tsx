import React, { PropsWithChildren } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { LiveProvider } from 'react-live';
import { defaultProps } from 'prism-react-renderer';

export interface PhoenixLiveProviderProps {
  code?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: { [key: string]: any };
  noInline?: boolean;
}

const PhoenixLiveProvider = ({
  children,
  code,
  noInline,
  scope
}: PropsWithChildren<PhoenixLiveProviderProps>) => {
  return (
    <LiveProvider
      code={code}
      scope={{ ...ReactBootstrap, ...React, ...scope }}
      noInline={noInline}
      transformCode={code => code.replace(/^import.*$/gm, '')}
      language="jsx"
      {...defaultProps}
    >
      {children}
    </LiveProvider>
  );
};

export default PhoenixLiveProvider;
