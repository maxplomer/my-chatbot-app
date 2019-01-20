import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      messages: [
        {author: "bot", text: "helloworld1234 🤖"},
        {author: "user", text: "helloworld5678"},
        {author: "bot", text: "helloworld9012 🤖"}
      ]
    };
    this.textInput = React.createRef();
    this.submitChatForm = this.submitChatForm.bind(this);
  }

  submitChatForm(event) {
    event.preventDefault();
    let messages = this.state.messages;
    let newMessage = this.textInput.current.value;
    this.textInput.current.value = "";
    messages.push({author: "user", text: newMessage});
    this.setState({
      messages: messages
    });
  }

  render() {
    var textInputStyle = {width: '50%', padding: '5px', marginTop: '20px'};
    var sendButtonStyle = {padding: '5px 10px', marginLeft: '10px', cursor: 'pointer'};
    var messageStyle = {padding: '5px 10px'};

    return (
      <div className="App">
        {this.state.date.toString()}
        {this.state.messages.map(function(message, index) {
          return (<div key={index} className={message.author} style={messageStyle}><span>{message.text}</span></div>);
        })}
        <form onSubmit={this.submitChatForm}>
          <input type="text" ref={this.textInput} required style={textInputStyle}/>
          <button type="submit" style={sendButtonStyle}>Send</button>
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
