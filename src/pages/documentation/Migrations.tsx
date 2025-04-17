import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import migrations from 'data/migrations';
import { Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Migrations = () => {
  return (
    <div>
      <h2 className="mb-4 lh-sm">Migrations</h2>

      <Card className="mb-4">
        <Card.Body>
          <Alert variant="subtle-warning" className="mb-0">
            <div className="d-flex">
              <FontAwesomeIcon icon={faExclamationTriangle} className="fs-5" />
              <div className="ms-3 flex-1">
                <h4 className="alert-heading">Before you update!</h4>
                Backup your files and read the changelog before updating{' '}
                {import.meta.env.REACT_APP_TITLE}-React on your project. If you
                come across with any problems with{' '}
                {import.meta.env.REACT_APP_TITLE}
                -React template during the update, feel free to contact us at{' '}
                <a href="mailto:support@themewagon.com">
                  support@themewagon.com
                </a>
                .
              </div>
            </div>
          </Alert>
        </Card.Body>
      </Card>

      {migrations.map(migration => (
        <PhoenixDocCard className="mb-4" key={migration.from}>
          <PhoenixDocCard.Header noPreview>
            <div className="d-flex align-items-center">
              <p className="text-body text-nowrap mb-0">
                <code className="fs-7 opacity-50">{migration.from}</code>
                <span className="mx-3">to</span>
                <code className="fs-7">{migration.to}</code>
              </p>
              <Link
                to={`#${migration.to}`}
                className="opacity-0 hover-show fw-bold ps-2"
              >
                #
              </Link>
            </div>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            {migration.to === 'v1.9.0' && (
              <>
                {/* <p>
                  In this version, we have converted our project from Create
                  React App (CRA) to Vite. If you want to migrate from v1.8.0 to
                  v1.9.0, please follow the steps below:
                  <ul className="bullet-inside bg-body-highlight p-3 px">
                    <li>
                      <h6 className="d-inline-block">
                        1. Install the following packages
                      </h6>
                      <ul>
                        <li>vite</li>
                        <li>vite-tsconfig-paths</li>
                        <li>chokidar</li>
                        <li>rtlcss</li>
                        <li>@vitejs/plugin-react</li>
                        <li>@types/rtlcss</li>
                      </ul>
                    </li>
                    <li>
                      <h6 className="d-inline-block">
                        2. UnInstall the following packages
                      </h6>
                      <ul>
                        <li>react-scripts</li>
                        <li>clean-webpack-plugin</li>
                        <li>css-loader</li>
                        <li>file-loader</li>
                        <li>mini-css-extract-plugin</li>
                        <li>sass-loader</li>
                        <li>webp-converter</li>
                        <li>webpack</li>
                        <li>webpack-cli</li>
                        <li>webpack-fix-style-only-entries</li>
                        <li>@automattic/webpack-rtl-plugin</li>
                        <li>@craco/craco</li>
                        <li>@craco/types</li>
                      </ul>
                    </li>
                    <li>
                      <h6 className="d-inline-block">
                        3. Replace the entry file <code>index.tsx</code> to{' '}
                        <code>main.tsx</code> and update this file.
                      </h6>
                    </li>
                    <li>
                      <h6 className="d-inline-block">
                        4. Move index.html file from src to root folder and
                        update related paths. Add the following files.
                      </h6>
                      <ul>
                        <li>compile-scss.ts</li>
                        <li>eslint.config.js</li>
                        <li>global.d.ts</li>
                        <li>index.html</li>
                        <li>src/vite-env.d.ts</li>
                        <li>vite.config.ts</li>
                        <li>tsconfig.app.json</li>
                        <li>tsconfig.node.json</li>
                      </ul>
                    </li>

                    <li>
                      <h6 className="d-inline-block">
                        5. Update vite.config.ts
                      </h6>
                    </li>
                    <li>
                      <import className="d-inline-block">
                        6. Update environment variables. CRA uses REACT_APP_ ,
                        Vite uses VITE_. CRA uses process.env and vite uses
                        import.meta.env. Replace all process.evn with
                        import.meta.env
                      </import { classNames } from 'classnames';
h6>
                    </li>
                  </ul>
                </p> */}
                <div className="bg-body-highlight p-3 py-5 mb-5">
                  <p>
                    In this version, we have migrated our project from Create
                    React App (CRA) to Vite. If you're upgrading from v1.8.0 to
                    v1.9.0, please follow the steps outlined below.
                  </p>
                  <h5 className="mb-2">1. Install Required packages</h5>
                  <PhoenixLiveEditor
                    code={`npm install vite vite-tsconfig-paths chokidar rtlcss @vitejs/plugin-react @types/rtlcss`}
                  />
                  <h5 className="mt-3 mb-2">
                    2. Uninstall CRA-Related Packages
                  </h5>
                  <PhoenixLiveEditor
                    code={`npm uninstall react-scripts clean-webpack-plugin css-loader file-loader mini-css-extract-plugin sass-loader webp-converter webpack webpack-cli webpack-fix-style-only-entries @automattic/webpack-rtl-plugin @craco/craco @craco/types`}
                  />
                  <h5 className="mt-3">3. Update Entry File</h5>
                  <ul>
                    <li>
                      Rename index.tsx to main.tsx and update the changes.
                    </li>
                  </ul>
                  <h5 className="mt-3">4. Move and Add Files</h5>
                  <ul>
                    <li>
                      Move <code>index.html</code> from src to root folder and
                      update the changes.
                    </li>
                    <li>
                      Make Sure you add these files
                      <ul>
                        <li>compile-scss.ts</li>
                        <li>eslint.config.js</li>
                        <li>global.d.ts</li>
                        <li>index.html</li>
                        <li>src/vite-env.d.ts</li>
                        <li>vite.config.ts</li>
                        <li>tsconfig.app.json</li>
                        <li>tsconfig.node.json</li>
                      </ul>
                    </li>
                    <li>
                      In vite <code>~</code> is not supported SCSS files. You
                      need to update the import paths to use relative or
                      absolute paths instead, like the examples below
                    </li>
                    <PhoenixLiveEditor
                      code={`@import '~bootstrap/scss/functions'\n//to \n@import '../../../node_modules/bootstrap/scss/functions'`}
                    />
                  </ul>

                  <h5 className="mt-3">
                    5. Update <code>vite.config.ts</code>
                  </h5>
                  <h5 className="mt-3">6. Update environment variables</h5>
                  <ul>
                    <li>
                      Rename all <code>REACT_APP_</code> variables ➝{' '}
                      <code>VITE_</code>{' '}
                    </li>
                    <li>
                      Replace <code>process.env</code> with{' '}
                      <code>import.meta</code> like the examples below
                    </li>
                    <PhoenixLiveEditor
                      code={`process.env.REACT_APP_API_URL \n//with \nimport.meta.env.VITE_API_URL`}
                    />
                  </ul>
                  <h5 className="mt-3 mb-2">
                    7. Update <code>package.json</code> scripts
                  </h5>
                  <PhoenixLiveEditor
                    code={`"scripts": {\n "dev": "vite",\n "build": "vite build",\n "preview": "vite preview",\n}`}
                  />
                </div>
              </>
            )}
            <ul className="bullet-inside ps-0">
              <li>
                <h6 className="d-inline-block">Add</h6>
                <ul>
                  {migration.new.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h6 className="d-inline-block">Modify</h6>
                <ul>
                  {migration.update.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
              {migration.delete && (
                <li>
                  <h6 className="d-inline-block">Remove</h6>
                  <ul>
                    {migration.delete.map(file => (
                      <li key={file}>{file}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      ))}
    </div>
  );
};

export default Migrations;
