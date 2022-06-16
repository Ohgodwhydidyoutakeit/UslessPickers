import React from 'react';
import './App.css';
import { BirthDate } from './components/BirthDate/BirthDate';

function App() {
  return (
    <div className="App">
      <nav>
        <p>Hello there</p>
        <p>here are some usless pickers </p>
      </nav>
      <div className='container'>
        <BirthDate startDate={new Date('1950-01-01') } endDate={new Date()}/>
      </div>
    </div>
  );
}

export default App;
