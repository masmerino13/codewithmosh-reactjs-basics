import React from 'react';
import queryString from 'query-string';

const posts = ({ match, location }) => {

  const query = queryString.parse(location.search);
  console.log(query);
    
  return (
    <div>
        <h1>Posts</h1>
        {`Year: ${match.params.year} - month: ${match.params.month}`}
    </div>
  )
}

export default posts;
