import React from 'react';
import { Button, NavBar, SafeArea } from 'antd-mobile'
import { BrowserRouter } from 'react-router-dom';
import ErrorHandler from './components/error-handler';
import RouterElements from './pages/routes';

function App() {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <>
          <div style={{ background: '#ace0ff' }}>
            <SafeArea position='top' />
          </div>
          <RouterElements />
          <div style={{ background: '#ffcfac' }}>
            <SafeArea position='bottom' />
          </div>
        </>
      </ErrorHandler>
    </BrowserRouter>
  );
}

export default App;
