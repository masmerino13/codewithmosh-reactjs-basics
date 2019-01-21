import React, { Component } from 'react';
import Rating from 'react-rating';

import { getMovies } from '../services/fakeMovieService';
import Badge from '../utils/setBadge';
import Actions from '../utils/dropdownActions';

class Movies extends Component {
    state = {
        moviesList: getMovies()
    }

    onRemovemovie = () => {

    }

  render() {
    const { moviesList } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th></th>
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
                            fullSymbol="fa fa-star fa-1x yellow" />
                    </td>
                    <td>{movie.genre.name}</td>
                    <td><Badge value={movie.numberInStock} /></td>
                    <td><Actions id={movie._id} action={this.onRemovemovie} /></td>
                </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Movies;
