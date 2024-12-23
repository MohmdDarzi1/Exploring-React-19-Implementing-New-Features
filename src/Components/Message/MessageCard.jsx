import { useState } from "react";
import Message from "./Message";

function MessageCard() {
  const [messages, setMessages] = useState([]);

  function createTimeout(message) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(message), 2000); 
    });
  }

  async function sendMessage({ message }) {
    const sentMessage = await createTimeout(message); 
    setMessages((prevMessages) => [...prevMessages, { text: sentMessage }]); 
  }

  return <Message messages={messages} sendMessage={sendMessage} />;
}

export default MessageCard;
