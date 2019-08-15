import React from 'react';
import './App.module.css';
import Products from '../Products/ProductsContainer';
import Cart from '../Cart/CartContainer';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIconContainer';
import s from './App.module.css';

function App() {
  return (
    <main className={s.container}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <ul>
          <li>
            <Link to='/'>Products</Link>
          </li>
        </ul>
        <CartIcon />
      </header>
      <Switch>
        <Route exact path='/' component={Products} />
        <Route exact path='/cart' component={Cart} />
        <Redirect to='/' />
      </Switch>
    </main>
  );
}

export default App;
