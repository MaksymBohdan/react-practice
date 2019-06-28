import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import * as api from '../api-mock/api';
import ArticlesList from '../components/ArticlesList';
// import Article from '../components/Article';

export default class ArticlesPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => this.setState({ articles }));
  }
  render() {
    const { articles } = this.state;
    // const { match } = this.props;
    return (
      <>
        <h2>Articles Page</h2>
        <ArticlesList articles={articles} match={this.props.match} />
        {/* props от react-router-dom. или withRouter внутри ArticlesList */}
      </>
    );
  }
}
