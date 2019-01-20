import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      messages: ["helloworld1234", "testing999"]
    };

    this.submitChatForm = this.submitChatForm.bind(this);
  }

  submitChatForm(event) {
    event.preventDefault();
    var messages = this.state.messages;
    messages.push("another message");
    this.setState({
      messages: messages
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.date.toString()}
        {this.state.messages.map(function(message, index) {
          return (<div key={index}>{message}</div>);
        })}
        <form onSubmit={this.submitChatForm}>
          <input required />
          <button type="submit">Send</button>
        </form>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
