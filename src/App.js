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
        {author: "bot", text: "How can I help you? 🤖"},
        //{author: "user", text: "helloworld5678"},
        {author: "bot", text: "This is Max Plomer's chatbot 🤖"},
        {author: "bot", text: "Would you like to contact me, create a new project or see a slideshow or portfolio projects? 🤖"}
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

    //Call chatbot
    let chatbotReponse = this.chatbot.talk(userMessage);

    switch(chatbotReponse.action) {
      case 'showContactForm':
        this.showContactForm();
        break;
      case 'showCreateProjectForm':

        break;
      case 'showPortfolioSlideshow':

        break;
      default:

    }
    messages.push({author: "bot", text: chatbotReponse.botMessage});
    this.setState({
      messages: messages
    });
  }

  showContactForm() {
    setTimeout(function() {alert('show contact form')}, 2000);
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
