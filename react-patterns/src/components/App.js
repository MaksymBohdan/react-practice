import React from 'react';
// import TestComponent from './TestComponent';
import withLog from '../enhancers/withLog';
import withStorage from '../enhancers/withStorage';
import { compose } from 'recompose';
// import Togglable from './Togglable';
import FetchData from './FetchData';

function App() {
  return (
    <div className='App'>
      {/* withLog */}
      {/* <TestComponent a="a" b="b"/> */}

      {/* passPros */}
      {/* <TestComponent text="adads"/>*/}

      {/* withToggle */}
      {/* <TestComponent text='withToggle text' title='withToggle title' /> */}

      {/* Render Prop (Render callback) */}
      {/* <Togglable>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Toggle</button>
            {on && <TestComponent text='TEXT Render Prop' title='TITTLE Render Prop' />}
          </div>
        )}
      </Togglable> */}

      {/* FetchData */}
      <FetchData url='https://jsonplaceholder.typicode.com/users'>
        {({results, loading, error}) => (
          <div>
            {loading && <h1>LOADING...</h1>}
            {results.length > 0 && JSON.stringify(results, null, 2)}
          </div>
        )}
      </FetchData>
    </div>
  );
}

// export default withStorage(App);

export default compose(
  withLog,
  withStorage
)(App);
