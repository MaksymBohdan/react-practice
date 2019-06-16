import React from 'react';
// import withLog from '../enhancers/withLog';
// import passProps from '../enhancers/passProps';
// import withToggle from '../enhancers/withToggle';

//withLog
// const TestComponent = props => <div>{JSON.stringify(props, null, 2)}</div>;
// export default withLog(TestComponent);

//passProps
// const TestComponent = ({ title, text }) => (
//   <div>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </div>
// );
// export default passProps({
//   title: 'pass props title',
//   text: 'pass props text'
// })(TestComponent);

//withToggle
// const TestComponent = ({ title, text }) => (
//   <div>
//     <h2>{title}</h2>
//     <p>{text}</p>
//   </div>
// );
// export default withToggle(TestComponent);

//Togglable
const TestComponent = ({ title, text }) => (
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);
export default TestComponent;
