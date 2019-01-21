import React from 'react';

export default ({ value }) => {
    let classes = ['badge', 'm-2'];

    classes = classes.concat((value >= 3) ? 'badge-success' : 'badge-danger');

    return <span className={classes.join(' ')}>{(value === 0) ? "Zero" : value}</span>;
}