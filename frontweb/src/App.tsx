import './assets/styles/custom.scss';
import './App.css';

import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';
import Routess from 'Routess';

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routess />
    </AuthContext.Provider>
  );
};

export default App;
