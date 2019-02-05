import React from 'react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const table = ({ columns, sortColumn, onLike, onRemove, data, onSort}) => {
  return (
    <table className="table">
        <TableHeader {...{columns, sortColumn, onSort}} />
        <TableBody {...{columns, data, onLike, onRemove}} />
    </table>
  )
}

export default table
