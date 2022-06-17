import React, { Suspense } from 'react';
import './App.css';
// import {BirthDate } from './components/BirthDate/BirthDate';


const BirthDate = React.lazy(() => import('./components/BirthDate/BirthDate'));
const PhoneNumer = React.lazy(() => import('./components/PhoneNumer/PhoneNumber'));

function App() {
  return (
    <div className="App">
      <nav>
        <p>Hello there</p>
        <p>here are some usless pickers </p>
      </nav>
      <div className='container'>
        <Suspense fallback={<div>Loading...</div>}>
          <BirthDate startDate={new Date('1970-01-01')} endDate={new Date()} />

        </Suspense>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <PhoneNumer />
        {/* </Suspense> */}
      </div>
    </div>
  );
}

export default App;
