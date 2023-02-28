import PhoenixDocCard from 'components/base/PhoenixDocCard';

const code = `() => (
  <h3>
    So functional. Much wow!
  </h3>
)
`;

const Starter = () => {
  return (
    <div>
      <PhoenixDocCard>
        <PhoenixDocCard.Header title="State">
          <h5>jhaskhjdashk</h5>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body code={code} />
      </PhoenixDocCard>
    </div>
  );
};

export default Starter;
