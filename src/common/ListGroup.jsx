import React from 'react';

const ListGroup = ({ items=[], action, selected }) => {
  return (
    <>
    <ul className="list-group">
        <li className={`list-group-item ${(selected === 'all') ? 'active' : ''}`} onClick={() => action('all')}>All</li>
        {
            items.map((item, key) => <li className={`list-group-item ${(selected._id === item._id) ? 'active' : ''}`} key={ key } onClick={() => action(item)}>{ item.name }</li>)
        }
    </ul>
    </>
  )
}

export default ListGroup;