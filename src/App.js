import React from 'react';
import { Header, Footer } from './components'
import { Home, Products, Blog, Cart, Contact } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
