import React from 'react';
import './App.css';
import { SampleForm } from './Pages/SampleForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';

const App: React.FC = () => {
  return (
    // must be wrapped with the BrowserRouter component to enable routing
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='' element={<SampleForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
