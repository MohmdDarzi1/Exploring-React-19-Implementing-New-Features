import { useOptimistic } from "react";
import MessageForm from "./MessageForm";

function Message({ messages, sendMessage }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div className="text-center">
  
      <MessageForm
        addOptimisticMessage={addOptimisticMessage}
        sendMessage={sendMessage}
      />
      
   
      {optimisticMessages.map((message, index) => (
        <div key={index} className="max-w-xl mx-auto my-10">
          <div>{message.text}</div>
          {message.sending && <div className="text-slate-500">sending...</div>}
        </div>
      ))}
    </div>
  );
}

export default Message;
