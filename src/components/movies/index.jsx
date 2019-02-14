import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import Pagination from '../../utils/pagination';
import paginate from '../../utils/paginate';
import ListGroup from '../../common/ListGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        moviesList: [],
        pageSize: 3,
        currentPage: 1,
        genres: [],
        filters: {
          genre: 'all'
        },
        selectedGenre: 'all',
        sortColumn: {
          path: 'title',
          order: 'asc'
        }
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

    handleSort = sortColumn  => {
      this.setState({sortColumn});
    }

    getPageData = () => {
      const { moviesList, selectedGenre, sortColumn, currentPage, pageSize } = this.state;

      const items = moviesList.filter(movie => { return (selectedGenre === 'all') ? true : movie.genre._id === selectedGenre._id });

      const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);

      const movies = paginate({ items: sorted, currentPage, pageSize });

      return { pageCount: items.length, data: movies };
    }

    handleNewMovie = movie => {
      console.log('movie', movie);
    }

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      sortColumn,
      selectedGenre
    } = this.state;

    const { pageCount, data: movies } = this.getPageData();

    return (
      <>
        <h3>Manage your movies</h3>
        <div className="row">
          <div className="col-md-2 col-lg-2">
            <ListGroup items={genres} action={this.handleFilterByGenre} selected={selectedGenre} />
          </div>
          <div className="col-md-10 col-lg-10">
            <Link className="btn btn-primary" to="/add-movie">New Movie</Link>
            { pageCount > 0 && <p className="text-right font-italic">Showing { pageCount } movies</p> }        
            <MoviesTable  {
              ...{
                movies,
                sortColumn,
                onLike: this.handleLike,
                onRemove: this.onRemovemovie,
                onSort: this.handleSort
                }
              } />
            <Pagination
              itemsCount={pageCount}
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
