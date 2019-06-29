import React from 'react';
import { Switch, Route /*Redirect*/ } from 'react-router-dom';
import Nav from './Nav';
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import ArticlesPage from '../pages/ArticlesPage';
import ArticlePage from '../pages/ArticlePage';

const App = () => (
  <>
    <h1>Router Basics</h1>
    <Nav />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route exact path='/articles' component={ArticlesPage} />
      <Route path='/articles/:id' component={ArticlePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
// const HomePage = ({ title }) => <h3>{title}</h3>;

/* руками прокинуть пропы(histor, location, match),если используется render. Component делет автоматически */
/* <Route exact path='/' render={props => <HomePage title='Home Page' {...props} />} /> */

/* <Redirect to='/' /> */
