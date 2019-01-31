import React from 'react';
import Rating from 'react-rating';

import Badge from '../utils/setBadge';
import Actions from '../utils/dropdownActions';
import Like from '../utils/like';

const moviesTable = ({ movies, onLike, onRemove, onSort }) => {
  return (
      <>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th onClick={() => onSort('title')}>Title</th>
                <th onClick={() => onSort('genre.name')} className="text-center">Genre</th>
                <th onClick={() => onSort('numberInStock')} className="text-center">Stock</th>
                <th onClick={() => onSort('')} width="150"></th>
            </tr>
            </thead>
            <tbody>
            {
                movies.map(movie => (
                    <tr key={movie._id}>
                        <td>
                            {movie.title}
                            <br />
                            <Rating
                                initialRating={movie.dailyRentalRate}
                                emptySymbol="fa fa-star-o fa-1x yellow"
                                fullSymbol="fa fa-star fa-1x yellow" />  <Like like={ movie.isLiked } onLiked={() => onLike(movie)} />
                        </td>
                        <td className="text-center">{movie.genre.name}</td>
                        <td className="text-center"><Badge value={movie.numberInStock} /></td>
                        <td className="text-right"><Actions id={movie._id} action={() => onRemove(movie._id)} /></td>
                    </tr>
                ))
            }
            {
                movies.length === 0 && <tr><td colSpan="4" className="text-center font-italic">No data to show</td></tr>
            }
            </tbody>
        </table>
      </>
  )
}

export default moviesTable
