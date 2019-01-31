import React, { Component, Fragment } from 'react';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../utils/pagination';
import paginate from '../utils/paginate';
import ListGroup from '../common/ListGroup';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = {
        moviesList: [],
        pageSize: 3,
        currentPage: 1,
        genres: [],
        filters: {
          genre: 'all'
        },
        selectedGenre: 'all'
    }

    componentDidMount() {
      this.setState({
        moviesList: getMovies(),
        genres: getGenres()
      })
    }

    onRemovemovie = (movieId) => {
      this.setState({
        moviesList: this.state.moviesList.filter(movie => movie._id !== movieId)
      });
    }

    handleLike = movie => {
      const moviesList = [...this.state.moviesList];
      const index = moviesList.indexOf(movie);
      moviesList[index] = {...movie, isLiked: movie.isLiked ? false : true};

      this.setState({ moviesList });
    }

    handlePageChange = page => {
      this.setState({ currentPage: page });
    }

    handleFilterByGenre = genre => {
      this.setState({
        selectedGenre: genre,
        currentPage: 1
      })
    }

  render() {
    const {
      moviesList,
      pageSize,
      currentPage,
      genres,
      selectedGenre
    } = this.state;

    const items = moviesList.filter(movie => { return (selectedGenre === 'all') ? true : movie.genre._id === selectedGenre._id }).sort((a, b) => { console.log(a, b)});

    const movies = paginate({ items, currentPage, pageSize });

    return (
      <>
        <h3>Manage your movies</h3>
        <div className="row">
          <div className="col-md-2 col-lg-2">
            <ListGroup items={genres} action={this.handleFilterByGenre} selected={selectedGenre} />
          </div>
          <div className="col-md-10 col-lg-10">
            { items.length > 0 && <p className="text-right font-italic">Showing { items.length } movies</p> }        
            <MoviesTable movies={movies} onLike={this.handleLike} onRemove={this.onRemovemovie} onSort={() => console.log('sorting')} />
            <Pagination
              itemsCount={items.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
