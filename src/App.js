import React from 'react';
import './App.css';
import Navbar from './components/Dashboard/Navbar/Navbar';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Sidebar />
    </div>
  );
}

export default App;
