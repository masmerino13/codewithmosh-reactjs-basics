import React from 'react';

export default ({ action }) => {
    return (
    <div className="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Actions
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a onClick={action} className="dropdown-item">Remove</a>
        </div>
    </div>)
}