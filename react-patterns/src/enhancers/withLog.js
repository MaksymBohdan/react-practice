import React from 'react';

const withLog = WrappedComponent => {
  return class WithLog extends React.Component {
    state = { on: false };
    
    componentDidMount() {
      console.group(`Logger ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }
    toggle = () => this.setState(prev => ({ on: !prev.on }));

    render() {
      const { on } = this.state;
      console.log('props', this.props);

      return (
        <div>
          <button onClick={this.toggle}>{on ? 'HIDE' : 'SHOW'}</button>
          {on && <WrappedComponent {...this.props} />}
        </div>
      );
    }
  };
};

export default withLog;

/*//in case of functional component
 const withLogFn = WrappedComponent => {
   return function WithLog(props) {
    return <WrappedComponent {...props} />;
  };
};*/
