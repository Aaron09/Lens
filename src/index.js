import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" 
        className="everestImage"
        />
        <Title />
        <NameInput />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="title"> 
        <h4> Hi! My name is Aaron. </h4>
        <h7> What is your name? </h7>
      </div>
    );
  }
}

class NameInput extends React.Component {
  constructor(props, imageTitle) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="nameInputForm">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

////////

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
