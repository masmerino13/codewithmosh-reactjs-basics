import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const onConfirmDelete = (action)  => {
    confirmAlert({
        title: 'Delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes, delete it',
            onClick: () => action()
          },
          {
            label: 'Close'
          }
        ]
      })
}

export default ({ action }) => {
    return (
        <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Actions
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a onClick={() => onConfirmDelete(action)} className="dropdown-item btn">Remove</a>
            </div>
        </div>
    )
}