import React, { Component } from 'react';
import PostList from '../PostList/PostListContainer';
import AuthorList from '../AuthorList/AuthorListContainer';
import s from './App.module.css';

class App extends Component {
  componentDidMount() {
  }

  render() {
      return (
          <main className={s.container}>
              <section className={s.sticky}>
                  <AuthorList />
              </section>

              <section className={s.section}>
                  <PostList />
              </section>
          </main>
      );
  }
}

export default App;
