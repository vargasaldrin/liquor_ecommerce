import React from 'react';
import { Header, Footer } from './components'
import { Home } from './pages'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
