import { AppContext } from 'providers/AppProvider';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

const App = () => {
  const { setConfig } = useContext(AppContext);
  return (
    <div>
      <Button
        variant="phoenix-primary"
        onClick={() => {
          setConfig({ isRTL: true, navbarTopStyle: '' });
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default App;
