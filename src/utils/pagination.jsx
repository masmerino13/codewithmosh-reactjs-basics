import React from 'react';
import { range } from 'lodash';
import propTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) return null;

    const pages = range(1, pagesCount + 1);

  return (
    <>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pages.map(page => <li key={ page } className={ `page-item ${page === currentPage ? 'active' : '' }`}><a className="page-link" onClick={() => onPageChange(page)}>{ page }</a></li>)
                }
            </ul>
        </nav>
    </>
  )
}

Pagination.propTypes = {
    itemsCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
}

export default Pagination
