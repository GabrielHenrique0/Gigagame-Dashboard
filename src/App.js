import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Header from './components/Header/';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}

          <Route exact path="/" component={Home} />

      </div>
    </BrowserRouter>
  );
}

export default App;