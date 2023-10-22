import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import WizardFormProvider from 'providers/WizardFormProvider';
import WizardFormCard from 'components/wizard/WizardFormCard';

const WizardExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Wizard form"
        description="A form UI to enable users to achieve a goal through a series of
        steps."
      />
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Progress Tab" noPreview />
        <PhoenixDocCard.Body>
          <WizardFormProvider validation>
            <WizardFormCard />
          </WizardFormProvider>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default WizardExample;
