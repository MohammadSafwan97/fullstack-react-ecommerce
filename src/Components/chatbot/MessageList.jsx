import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {
  return (
    <>
      {messages.map((m, index) => (
        <MessageBubble key={index} role={m.role} text={m.content} />
      ))}
    </>
  );
}
