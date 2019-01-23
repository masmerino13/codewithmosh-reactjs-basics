import React, { Component, Fragment } from 'react';
import Rating from 'react-rating';

import { getMovies } from '../services/fakeMovieService';
import Badge from '../utils/setBadge';
import Actions from '../utils/dropdownActions';
import Like from '../utils/like';

class Movies extends Component {
    state = {
        moviesList: getMovies()
    }

    onRemovemovie = (movieId) => {
      this.setState({
        moviesList: this.state.moviesList.filter(movie => movie._id !== movieId)
      });
    }

    handleLike = movie => {
      console.log('movie', movie);

      const moviesList = [...this.state.moviesList];
      const index = moviesList.indexOf(movie);
      moviesList[index] = {...movie, isLiked: movie.isLiked ? false : true};

      this.setState({ moviesList });
    }

  render() {
    const { moviesList } = this.state;

    return (
      <Fragment>
        <h3>Manage your movies</h3>
        { moviesList.length > 0 && <p className="text-right font-italic">Showing { moviesList.length } movies</p> }        
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th className="text-center">Genre</th>
              <th className="text-center">Stock</th>
              <th width="150"></th>
            </tr>
          </thead>
          <tbody>
            {
                moviesList.map(movie => (
                  <tr key={movie._id}>
                      <td>
                          {movie.title}
                          <br />
                          <Rating
                              initialRating={movie.dailyRentalRate}
                              readonly={true}
                              emptySymbol="fa fa-star-o fa-1x yellow"
                              fullSymbol="fa fa-star fa-1x yellow" />  <Like like={ movie.isLiked } onLiked={() => this.handleLike(movie)} />
                      </td>
                      <td className="text-center">{movie.genre.name}</td>
                      <td className="text-center"><Badge value={movie.numberInStock} /></td>
                      <td className="text-right"><Actions id={movie._id} action={() => this.onRemovemovie(movie._id)} /></td>
                  </tr>
              ))
            }
            {
              moviesList.length === 0 && <tr><td colspan="4" className="text-center font-italic">No data to show</td></tr>
            }
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Movies;
