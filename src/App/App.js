import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import './App.css';

function App() {

  const daysHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className="App">
      <Calendar 
          style = {{width: "100%", height: "2000px"}}
          days = {daysHeader}
      />
    </div>
  );
}

export default App;
