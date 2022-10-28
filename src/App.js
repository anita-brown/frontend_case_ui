import React from 'react';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import MainBody from './models/MainBody';

function App() {
  return (
    <div className="lg:px-28 px-16 py-4 lg:py-8">
      <NavBar />
      <MainBody/>
      <Footer />
    </div>
  );
}

export default App;
