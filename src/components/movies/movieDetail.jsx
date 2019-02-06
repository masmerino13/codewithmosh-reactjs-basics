import React from 'react';

const handleClick = ({replace}) => {
    replace('/movies');
}

const MovieDetail = ({ match, history }) => {
  return (
    <div>
      Movie form: { match.params.id }
      <br />
      <button className="btn btn-primary" onClick={() => handleClick(history)}>Save</button>
    </div>
  )
}

export default MovieDetail;
