import React, { useState } from "react";
import "./AIChatBot.css";

export default function AIChatBot({ apiBase = "" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setInput("");

    try {
      const resp = await fetch(`${apiBase}/api/assistant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await resp.json();
      const botText = data.reply || "Sorry, I couldn't understand.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botText },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error contacting server." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button className="chatbot-btn" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">🛍️ Shopping Assistant</div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-message ${m.role === "user" ? "user" : "assistant"}`}
              >
                <div className="chat-bubble">{m.content}</div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button type="submit" disabled={loading}>
              {loading ? "…" : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
