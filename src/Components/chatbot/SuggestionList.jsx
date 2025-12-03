export default function SuggestionList({ onSend }) {
  const suggestions = [
    "Recommend me something",
    "Show best sellers",
    "Help me find a shirt",
    "What do you have under $20?",
    "Budget friendly options",
    "Track my order"
  ];

  return (
    <div className="suggestion-container">
      {suggestions.map((s, i) => (
        <button key={i} className="suggestion-btn" onClick={() => onSend(s)}>
          {s}
        </button>
      ))}
    </div>
  );
}
