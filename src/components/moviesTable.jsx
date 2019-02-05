import React from 'react';

import Rating from 'react-rating';
import Badge from '../utils/setBadge';
import Actions from '../utils/dropdownActions';
import Like from '../utils/like';
import Table from '../common/table';

const moviesTable = ({ movies, onLike, onRemove, sortColumn, onSort }) => {

    const columns = [
        {
            path: 'title', label: 'Title', content: movie => 
            <>
                {movie.title}
                <br />
                <Rating
                    initialRating={movie.dailyRentalRate}
                    emptySymbol="fa fa-star-o fa-1x yellow"
                    fullSymbol="fa fa-star fa-1x yellow" />  <Like like={ movie.isLiked } onLiked={() => onLike(movie)} />
            </>
        },
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock', content: movie => <Badge value={movie.numberInStock} />},
        {key: 'delete', content: movie => <Actions id={movie._id} action={() => onRemove(movie._id)} />}
    ];

  return (<Table {...{columns, sortColumn, onLike, onRemove, data: movies, onSort}} />)
}

export default moviesTable
