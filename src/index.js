import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {
  render() {
    return (
      <h4> Hi! My name is Aaron! </h4>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
