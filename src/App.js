import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import Movies from './components/movies';
import Counters from './components/counters';
import Todos from './components/todos';

const Copy = styled.div`
  text-align: right;
  padding-right: 20px;
  font-style: italic;
  color: #cecfd0;
`;

const Home = () => {
  return (
    <div className="text-center">Code with Mosh course practice</div>
  )
}

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">React basics</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/movies">Movies</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/counters">Counters</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/todos">Hooks todos</Link></li>
          </ul>
        </div>
      </nav>
      <Copy>By @masmerinosv</Copy>
    </>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <main className="container">
              <Route exact path="/" component={Home} />
              <Route path="/movies" component={Movies} />
              <Route path="/counters" component={Counters} />
              <Route path="/todos" component={Todos} />
          </main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
