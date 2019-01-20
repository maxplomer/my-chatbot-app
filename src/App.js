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

    //Add user message to state
    let messages = this.state.messages;
    let userMessage = this.textInput.current.value;
    this.textInput.current.value = "";
    messages.push({author: "user", text: userMessage});
    this.setState({
      messages: messages
    });

    //Call chatbot
    let chatbotReponse = this.callChatbot(userMessage);
    switch(chatbotReponse.action) {
      case 'showContactForm':

        break;
      case 'showCreateProjectForm':

        break;
      case 'showPortfolioSlideshow':

        break;
      default:
        messages.push({author: "bot", text: chatbotReponse.botMessage});
        this.setState({
          messages: messages
        });
    }
  }

  callChatbot(userMessage) {
    return {botMessage: "this is the bot message", action: null}; //
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
