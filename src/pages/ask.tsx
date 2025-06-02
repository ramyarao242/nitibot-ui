import { useState } from "react";
import { useLocation } from "react-router-dom";

const Ask: React.FC = () => {
  const location = useLocation();
  const initialQuestion = location.state?.initialQuestion as string | undefined;

  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>(
    initialQuestion
      ? [
          { from: "bot", text: "Hello! Ask me anything about Chanakya's wisdom." },
          { from: "user", text: initialQuestion }
        ]
      : [
          { from: "bot", text: "Hello! Ask me anything about Chanakya's wisdom." }
        ]
  );
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    // Simulate bot reply (replace with real logic or API call)
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: "This is a sample answer from Chanakya Bot." }
      ]);
    }, 800);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md rounded shadow-lg flex flex-col h-[70vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t flex">
          <input
            className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ask;