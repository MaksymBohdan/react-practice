import React from 'react';

const Article = ({ match }) => {
  return <div>ID - {match.params.id}</div>;
};

export default Article;
