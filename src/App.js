import React from 'react';
import { Route } from 'react-router-dom';

import Home from './page/home/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} />
    </div>
  );
}

export default App;
