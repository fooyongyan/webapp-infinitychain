import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import './App.scss';

function App() {

  const daysHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className="App">
      <Calendar 
          style = {{width: "30%", height: "30%"}}
          days = {daysHeader}
      />
    </div>
  );
}

export default App;
