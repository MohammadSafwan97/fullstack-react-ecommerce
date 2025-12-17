import React, { useState } from "react";
import FloatingButton from "./FloatingButton";
import ChatWindow from "./ChatWindow";
import "./AIChatBot.css";

export function AIChatBot({ apiBase }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const resp = await fetch(`${apiBase}/api/assistant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await resp.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
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
      <FloatingButton onClick={() => setOpen(!open)} />

      {open && (
        <ChatWindow
          messages={messages}
          loading={loading}
          onSend={sendMessage}
        />
      )}
    </>
  );
}
