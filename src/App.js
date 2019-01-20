import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatbot from './Chatbot';

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
    this.chatbot = new Chatbot();
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
    let chatbotReponse = this.chatbot.talk(userMessage);

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

  render() {
    var textInputStyle = {width: '50%', padding: '5px', margin: '20px 0'};
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
            Max Plomer Chatbot App
          </p>
          <a
            className="App-link"
            href="https://maxplomer.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </header>
      </div>
    );
  }
}

export default App;
