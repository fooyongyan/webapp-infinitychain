import React from 'react';
import MonthlyCalendar from '../components/MonthlyCalendar/MonthlyCalendar';
import './App.scss';
function App() {

  
  const daysHeader = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className="App">
      <MonthlyCalendar 
          days = {daysHeader}
          style = {{width: "600px", height: "600px"}}
      />
    </div>
  );
}

export default App;
