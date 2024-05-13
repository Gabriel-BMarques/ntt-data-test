import React from 'react';
import './App.scss';
import AppRoutes from './Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
