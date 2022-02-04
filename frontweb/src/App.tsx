import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom.scss';
import './App.css';

import { ToastContainer } from 'react-toastify';
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
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default App;
