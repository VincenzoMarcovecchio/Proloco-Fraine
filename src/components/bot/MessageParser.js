// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes("Ciao")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("Problemi di cinghiali")) {
      this.actionProvider.handleJavascriptList();
    }

    }



  }

  export default MessageParser;