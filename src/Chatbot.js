class Chatbot {
  talk(userMessage) {

    // Say hello
    if (userMessage.toLowerCase().match(/^hello|how are you|hi|whats up/)) {
      return {botMessage: "Nice to meet you 🤖", action: null};
    }

    //case 'showContactForm':
    if (userMessage.toLowerCase().match(/^phone|email|contact|talk/)) {
      return {botMessage: "The best way to contact me is through the contact form 🤖", action: 'showContactForm'};
    }

    //case 'showCreateProjectForm':
    if (userMessage.toLowerCase().match(/^project/)) {
      return {botMessage: "Lets fill out a new project form 🤖", action: 'showCreateProjectForm'};
    }

    //case 'showPortfolioSlideshow':
    if (userMessage.toLowerCase().match(/^portfolio|project|slideshow|accomplishments/)) {
      return {botMessage: "Here is a portfolio of some recent projects 🤖", action: 'showPortfolioSlideshow'};
    }

    var milliseconds = (new Date).getTime();
    return {botMessage: "It is currently " + milliseconds + " in epoch time 🤖", action: null};
  }
}

export default Chatbot;
