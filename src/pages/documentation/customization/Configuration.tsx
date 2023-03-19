import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import React from 'react';

const exampleCode = `
<Breadcrumb className="mb-0">
    <Breadcrumb.Item href="#!">Item 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#!">Item 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#!">Item 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#!" active>
        Item 4
    </Breadcrumb.Item>
</Breadcrumb>`;

const Configuration = () => {
  return (
    <div>
      <DocPageHeader
        title="Setting up configuration"
        description="Phoenix-React has a global configuration system. You can change the theme settings with a single global javascript object."
      />

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Settings configuration" noPreview />
        <PhoenixDocCard.Body code={exampleCode} hidePreview>
          <p>
            Control side panel settings from one place. Go to <code>src/config.ts</code> file and
            set your setting configuration. If any config value is already saved in local storage
            and you want to change the default config, please clear the local storage first.
          </p>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default Configuration;
