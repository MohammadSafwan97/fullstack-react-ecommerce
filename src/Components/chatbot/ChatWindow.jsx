import SuggestionList from "./SuggestionList";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ChatWindow({ messages, loading, onSend }) {
  return (
    <div className="chatbot-window">
      <div className="chatbot-header">🛍️ Shopping Assistant</div>

      <div className="chatbot-messages">
        {messages.length === 0 ? (
          <SuggestionList onSend={onSend} />
        ) : (
          <MessageList messages={messages} />
        )}
      </div>

      <ChatInput loading={loading} onSend={onSend} />
    </div>
  );
}
