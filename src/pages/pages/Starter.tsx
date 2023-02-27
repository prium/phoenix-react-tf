import PhoenixDocCard from 'components/base/PhoenixDocCard';
import React from 'react';

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
        <PhoenixDocCard.Header title="State" description="lorem" />
        <PhoenixDocCard.Body code={code} />
      </PhoenixDocCard>
    </div>
  );
};

export default Starter;
