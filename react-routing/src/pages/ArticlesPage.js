import React, { Component } from 'react';
import queryString from 'query-string';
import * as api from '../api-mock/api';
import ArticlesList from '../components/ArticlesList';
import CategorySlector from '../components/CategorySlector';
import categories from '../api-mock/categories';

const getCategoryFromProps = props => queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = {
    articles: []
  };

  handlePushToAll = category => {
    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: 'category=all'
      });
    }
  };

  componentDidMount() {
    const category = getCategoryFromProps(this.props);

    this.handlePushToAll(category);
    // api.fetchAllArticles().then(articles => this.setState({ articles }));
    api.fetchArticlesByCategory(category).then(articles => this.setState({ articles }));
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;
    
    this.handlePushToAll(nextCategory);

    api.fetchArticlesByCategory(nextCategory).then(articles => this.setState({ articles }));
  }

  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`
    });
  };

  render() {
    const { articles } = this.state;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <>
        <h2>Articles Page</h2>
        <CategorySlector options={categories} value={currentCategory} onChange={this.handleCategoryChange} />
        <ArticlesList articles={articles} />
        {/* props от react-router-dom. или withRouter внутри ArticlesList */}
      </>
    );
  }
}

// import { Route } from 'react-router-dom';
// import Article from '../components/Article';
// const { match } = this.props;
