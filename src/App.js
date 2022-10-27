import React from 'react';
import NavBar from './components/navbar/NavBar';
import MainBody from './models/MainBody';

function App() {
  return (
    <div className="px-28 py-8">
      <NavBar />
      <MainBody/>
    </div>
  );
}

export default App;
