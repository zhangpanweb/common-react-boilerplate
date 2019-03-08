import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './app.less';

const Home = () => (
  <div>Home</div>
)

const About = () => (
  <div>About</div>
)

const ContactA = ()=>(
  <div>ContactA</div>
)

const ContactBA = ()=>(
  <div>ContactBA</div>
)


const ContactBB = ()=>(
  <div>ContactBB</div>
)

const ContactB = ({match})=>(
  <>
    <div>
      <Link to={`${match.url}/b-1`}>contact BA</Link>
      <Link to={`${match.url}/b-2`}>contact BB</Link>
    </div>
    <Switch>
      <Route path={`${match.url}/b-1`} component={ContactBA}/>
      <Route path={`${match.url}/b-2`} component={ContactBB}/>
    </Switch>
  </>
)

const Contact = ({match}) => (
  <>
    <p>contact</p>
    <div>
      <Link to={`${match.url}/a`}>contact A</Link>
      <Link to={`${match.url}/b`}>contact B</Link>
    </div>
    <Switch>
      <Route path={`${match.url}/a`} component={ContactA}/>
      <Route path={`${match.url}/b`} component={ContactB}/>
    </Switch>
  </>
)

const App = () => (
  <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </>
)

export default App;