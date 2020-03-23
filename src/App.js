import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './component/Header';
import SearchContainer from './component/SearchContainer';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <SearchContainer />
        <Footer />
    </div>
  );
}

export default App;
