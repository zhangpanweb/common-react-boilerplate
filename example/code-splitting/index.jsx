import React, { Suspense, lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const Home = lazy(()=> import('./home'));
const About = lazy(()=> import('./about'));
const Contact = lazy(()=> import('./contact'));

const App = () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Suspense>
  </>
);

export default App;
