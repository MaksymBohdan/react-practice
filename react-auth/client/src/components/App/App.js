import React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.module.css';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/' exact render={() => <h1>MAIN</h1>} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;
