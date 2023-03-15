import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'components/layouts/DocPagesLayout';

const textSelectionCode = `
<>
  <p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
  <p className="user-select-auto">This paragraph has default select behavior.</p>
  <p className="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
</>
`;

const responsiveCode = `
<>
  <div className="float-sm-start">Float start on viewports sized SM (small) or wider</div>
  <br />
  <div className="float-md-start">Float start on viewports sized MD (medium) or wider</div>
  <br />
  <div className="float-lg-start">Float start on viewports sized LG (large) or wider</div>
  <br />
  <div className="float-xl-start">Float start on viewports sized XL (extra-large) or wider</div>
  <br />
</>
`;

const InteractionsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Interactions"
        description="Utility classes that change how users interact with contents of a website."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text selection"
            description="Change the way in which the content is selected when the user interacts with it."
          />
          <PhoenixDocCard.Body code={textSelectionCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Pointer events"
            description="Change the way in which the content is selected when the user interacts with it."
          >
            <p className="mb-0 text-800">
              Bootstrap provides <code>.pe-none</code> and <code>.pe-auto</code> classes to prevent
              or add element interactions.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textSelectionCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default InteractionsExample;
