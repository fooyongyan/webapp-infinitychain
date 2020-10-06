import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import TimeWidget from '../components/TimeWidget/TimeWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calendar />
      <TimeWidget /> 
    </div>
  );
}

export default App;
