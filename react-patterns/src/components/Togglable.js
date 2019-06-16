// Render Prop (Render callback)
import React from 'react';

class Togglable extends React.Component {
  state = { on: false };

  toggle = () => this.setState(prev => ({ on: !prev.on }));

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default Togglable;
