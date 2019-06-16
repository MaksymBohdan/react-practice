// Render Prop (Render callback)
import React from 'react';
class FetchData extends React.Component {
  state = {
    results: [],
    loading: false,
    error: false
  };
  
  componentDidMount() {
    this.fetchData(this.props.url);
  }
  
  fetchData(url) {
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, results: data }))
      .catch(error => this.setState({ loading: false, error: true }));
  }
  
  render() {
    return this.props.children({
      results: this.state.results,
      loading: this.state.loading,
      error: this.state.error
    });
  }
}

export default FetchData;
