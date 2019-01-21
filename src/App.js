import React, { Component } from 'react';

import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Manage your movies</h3>
        <Movies />
      </div>
    );
  }
}

export default App;
