import React, { Component, Fragment } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components';

import Movies from './components/movies';
import Counters from './components/counters';
import Todos from './components/todos';
import Rentals from './components/rentals';
import Customers from './components/customers';
import MovieDetail from './components/movies/movieDetail';

const Copy = styled.div`
  text-align: right;
  padding-right: 20px;
  font-style: italic;
  color: #cecfd0;
`;

const NotFound = () => (<h1>404 - Close to be a nice not found page</h1>);

const menuItems = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/movies',
    label: 'Movies'
  },
  {
    path: '/counters',
    label: 'Counters'
  },
  {
    path: '/todos',
    label: 'Hooks todo'
  },
  {
    path: '/rentals',
    label: 'Rentals'
  },
  {
    path: '/customers',
    label: 'Customers'
  }
];

const otherMenu = {
  public: [
    {
      path: '/',
      main: Movies
    }
  ]
};

const NavBar = () => {

  console.log('menu', otherMenu);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">React basics</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
          {
            menuItems.map((item, key) => <li key={key} className="nav-item"><Link className="nav-link" to={item.path}>{item.label}</Link></li>)
          }
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
      <Fragment>
          <NavBar />
          <main className="container">
              <Switch>
                <Route path="/movies" component={Movies} />
                <Route path="/movie/:id" component={MovieDetail} />
                <Route path="/counters" component={Counters} />
                <Route path="/todos" render={(props) => <Todos {...props} something="algo" />} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/customers" component={Customers} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" to="/movies" />
                <Redirect to="/not-found" />
              </Switch>
          </main>
        </Fragment>
    );
  }
}

export default App;
