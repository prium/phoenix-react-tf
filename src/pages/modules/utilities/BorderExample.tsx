import classNames from 'classnames';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'components/layouts/DocPagesLayout';
import { useAppContext } from 'providers/AppProvider';
import { Col, Row } from 'react-bootstrap';

const additiveBorderCode = `
<>
  <span className="border" />
  <span className="border-top" />
  <span className="border-end" />
  <span className="border-bottom" />
  <span className="border-start" />
</>`;

const subtrativeBorderCode = `
<>
  <span className="border border-0" />
  <span className="border border-top-0" />
  <span className="border border-right-0" />
  <span className="border border-bottom-0" />
  <span className="border border-left-0" />
</>`;

const borderColorCode = `
<>
  <span className="border border-info"></span>
  <span className="border border-success"></span>
  <span className="border border-warning"></span>
  <span className="border border-danger"></span>
  <span className="border border-cake"></span>
  <span className="border border-facebook"></span>
  <span className="border border-twitter"></span>
  <span className="border border-google-plus"></span>
  <span className="border border-github"></span>
  <div className="w-100"></div>
  <span className="border border-black"></span>
  <span className="border border-dark"></span>
  <span className="border border-1100"></span>
  <span className="border border-1000"></span>
  <span className="border border-900"></span>
  <span className="border border-800"></span>
  <span className="border border-700"></span>
  <span className="border border-600"></span>
  <span className="border border-500"></span>
  <span className="border border-400"></span>
  <span className="border border-300"></span>
  <span className="border border-200"></span>
  <span className="border border-100"></span>
  <span className="border border-light"></span>
  <span className="border border-white"></span>
  <span className="border border-2"></span>
  <span className="border-top border-top-2"></span>
  <span className="border-end border-end-2"></span>
  <span className="border-bottom border-bottom-2"></span>
  <span className="border-start border-start-2"></span>
</>`;

const borderSizesCode = `
<>
  <span className="rounded-top"></span>
  <span className="rounded-top-lg"></span>
  <span className="rounded-end"></span>
  <span className="rounded-end-lg"></span>
  <span className="rounded-bottom"></span>
  <span className="rounded-bottom-lg"></span>
  <span className="rounded-start"></span>
  <span className="rounded-start-lg"></span>
</>
`;

const borderRadiusCode = `
<>
  <span className="rounded-0"></span>
  <span className="rounded-1"></span>
  <span className="rounded-2"></span>
  <span className="rounded-3"></span>
  <span className="rounded-circle"></span>
  <span className="rounded-pill" style={{ height:'75px',width:'150px' }}></span>
</>`;

const borderStyleCode = `
<>
  <span className="border border-dashed"></span>
  <span className="border-dashed border-top"></span>
  <span className="border-dashed border-end"></span>
  <span className="border-dashed border-bottom"></span>
  <span className="border-dashed border-left"></span>
</>
`;

const borderWidthCode = `
<>
  <span className="border border-1"></span>
  <span className="border border-2"></span>
  <span className="border border-3"></span>
  <span className="border border-4"></span>
  <span className="border border-5"></span>
  <hr />
  <span className="border border-top-2"></span>
  <span className="border border-end-2"></span>
  <span className="border border-bottom-2"></span>
  <span className="border border-start-2"></span>
</>
`;

const BorderExample = () => {
  const { getThemeColor } = useAppContext();

  return (
    <div>
      <DocPageHeader
        title="Border"
        description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Border" noPreview />
          <PhoenixDocCard.Body>
            <p>
              The classes are named using the format <code>border-{`{side}`}</code> for{' '}
              <code>xs</code> and{' '}
              <code>
                border-{`{side}`}-{`{breakpoint}`}
              </code>{' '}
              for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and{' '}
              <code>xxl</code>.
            </p>
            <p>
              Where<em> side</em> is one of:
            </p>
            <ul>
              <li>
                <code>top</code> - for classes that set style for <code>border-top</code>
              </li>
              <li>
                <code>bottom</code> - for classes that set style for <code>border-bottom</code>
              </li>
              <li>
                <code>left</code> - for classes that set style for <code>border-start</code>
              </li>
              <li>
                <code>right</code> - for classes that set style for <code>border-right</code>
              </li>
              <li>
                <code>x</code> - for classes that set both<code>*-left</code> and{' '}
                <code>*-right</code>
              </li>
              <li>
                <code>y</code> - for classes that set both<code>*-top</code> and{' '}
                <code>*-bottom</code>
              </li>
              <li>
                blank - for classes that set the<code>border</code> style on all 4 side of the
                element.
              </li>
            </ul>
            <p className="mb-0">
              Use border utilities to quickly style the<code>border </code> of an element. Great for
              images, buttons, or any other element.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Breadcrumb Example" />
          <PhoenixDocCard.Body code={additiveBorderCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BorderExample;
