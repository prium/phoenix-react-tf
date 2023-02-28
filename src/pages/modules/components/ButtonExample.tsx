import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'components/layouts/DocPagesLayout';

const phoenixButtonsCode = `
import Button from 'components/base/Button';

<div className='d-flex gap-2'>
  <Button variant='phoenix-primary'> Primary </Button>
  <Button variant='phoenix-secondary'> Secondary </Button>
  <Button variant='phoenix-success'> Success </Button>
  <Button variant='phoenix-danger'> Danger </Button>
  <Button variant='phoenix-warning'> Warning </Button>
  <Button variant='phoenix-info'> Info </Button>
</div>
`;

const solidButtonsCode = `
import Button from 'components/base/Button';

<div className='d-flex gap-2'>
  <Button variant='primary'> Primary </Button>
  <Button variant='secondary'> Secondary </Button>
  <Button variant='success'> Success </Button>
  <Button variant='danger'> Danger </Button>
  <Button variant='warning'> Warning </Button>
  <Button variant='info'> Info </Button>
  <Button variant='link'> Link </Button>
</div>
`;

const softButtonsCode = `
import Button from 'components/base/Button';

<div className="d-flex gap-2">
  <Button variant="soft-primary"> Primary </Button>
  <Button variant="soft-secondary"> Secondary </Button>
  <Button variant="soft-success"> Success </Button>
  <Button variant="soft-danger"> Danger </Button>
  <Button variant="soft-warning"> Warning </Button>
  <Button variant="soft-info"> Info </Button>
</div>
`;

const outlineButtonsCode = `
import Button from 'components/base/Button';

<div className="d-flex gap-2">
  <Button variant="outline-primary"> Primary </Button>
  <Button variant="outline-secondary"> Secondary </Button>
  <Button variant="outline-success"> Success </Button>
  <Button variant="outline-danger"> Danger </Button>
  <Button variant="outline-warning"> Warning </Button>
  <Button variant="outline-info"> Info </Button>
</div>
`;

const ButtonExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Buttons"
        description={`Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.`}
        link={{
          text: 'Buttons on react-bootstrap',
          url: 'https://react-bootstrap.github.io/components/buttons/'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Buttons" />
          <PhoenixDocCard.Body code={phoenixButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Buttons" />
          <PhoenixDocCard.Body code={solidButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Soft Buttons" />
          <PhoenixDocCard.Body code={softButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Outline Buttons" />
          <PhoenixDocCard.Body code={outlineButtonsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ButtonExample;
