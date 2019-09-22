import React from 'react';
import './App.module.css';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Header />
      
      <Switch>
        <Route path='/' exact render={() => <h1>MAIN</h1>} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
