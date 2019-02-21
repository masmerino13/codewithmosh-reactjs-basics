import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control my-3"
                id="searchQuery"
                placeholder="Search by title"
                value={value}
                onChange={e => onChange(e.currentTarget.value)}
                />
        </div>
    )
}

export default SearchBox
