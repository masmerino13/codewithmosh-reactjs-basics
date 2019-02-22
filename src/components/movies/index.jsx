import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';

import { getMovies, deleteMovie } from '../../services/movieService';
import { getGenres } from '../../services/genreService';
import Pagination from '../../utils/pagination';
import paginate from '../../utils/paginate';
import ListGroup from '../../common/ListGroup';
import MoviesTable from './moviesTable';
import SearchBox from '../../common/searchbox';

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
        },
        searchQuery: ''
    }

    async componentDidMount() {
      this.setState({
        moviesList: await getMovies(),
        genres: await getGenres()
      })
    }

    onRemovemovie = async (movieId) => {

      await deleteMovie(movieId);

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
        searchQuery: '',
        currentPage: 1
      })
    }

    handleSort = sortColumn  => {
      this.setState({sortColumn});
    }

    getPageData = () => {
      const { moviesList, selectedGenre, sortColumn, currentPage, pageSize, searchQuery } = this.state;

      let items = moviesList.filter(movie => { return (selectedGenre === 'all') ? true : movie.genre._id === selectedGenre._id });

      if (searchQuery) {
        items = items.filter(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
      }

      const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);

      const movies = paginate({ items: sorted, currentPage, pageSize });

      return { pageCount: items.length, data: movies };
    }

    handleSearch = query => {
      this.setState({
        searchQuery: query,
        selectedGenre: 'all',
        currentPage: 1
      })
    }

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      sortColumn,
      selectedGenre,
      searchQuery
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
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
