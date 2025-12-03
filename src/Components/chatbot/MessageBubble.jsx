export default function MessageBubble({ role, text }) {
  return (
    <div className={`chat-message ${role}`}>
      <div className="chat-bubble">{text}</div>
    </div>
  );
}
