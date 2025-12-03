import { useState } from "react";

export default function ChatInput({ loading, onSend }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  }

  return (
    <form className="chatbot-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        disabled={loading}
      />

      <button type="submit" disabled={loading || input.trim() === ""}>
        {loading ? "…" : "Send"}
      </button>
    </form>
  );
}
