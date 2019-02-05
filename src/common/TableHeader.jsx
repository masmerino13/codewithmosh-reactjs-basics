import React from 'react';

const raiseSort = (path, column, onSort) => {
    const sortColumn = {...column};

    if (!path) return null;

    if (path === sortColumn.path) {
    sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    } else {
    sortColumn.path = path;
    sortColumn.order = 'asc';
    }

    onSort(sortColumn);
}

const renderSortIcon = (column, sortColumn) => {
    if (column.path !== sortColumn.path) return null;
    return <i className={`fa fa-sort-${sortColumn.order}`}></i>;
}

const TableHeader = ({columns, sortColumn, onSort}) => {
  return (
    <thead>
        <tr>
            {columns.map((column, key) => (<th className="clickable" key={key} onClick={() => raiseSort(column.path, sortColumn, onSort)}>{column.label} {renderSortIcon(column, sortColumn)}</th>))}
        </tr>
    </thead>
  )
}

export default TableHeader
