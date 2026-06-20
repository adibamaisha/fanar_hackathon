import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

export default function AiAgentWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! I'm Bayan QA Assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: "bot",
        text: "Thanks for your question! Our team is here to help. How else can I assist you?",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="ai-agent-container">
      {!isChatOpen && (
        <button
          className="ai-agent-button"
          onClick={() => setIsChatOpen(true)}
          aria-label="Open AI Assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isChatOpen && (
        <div className="ai-chat-box">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <Bot size={18} />
              <span>Bayan QA Assistant</span>
            </div>
            <button
              className="ai-chat-close"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message ai-message-${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="ai-chat-input-group">
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Ask something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
            <button
              className="ai-chat-send"
              onClick={handleSendMessage}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .ai-agent-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        .ai-agent-button {
          width: 4rem;
          height: 4rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          border: none;
          cursor: pointer;
          display: grid;
          place-items: center;
          box-shadow: 0 8px 24px rgba(249, 115, 22, 0.45);
          transition: all 200ms ease;
        }

        .ai-agent-button:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(249, 115, 22, 0.65);
        }

        .ai-agent-button:active {
          transform: scale(0.95);
        }

        .ai-chat-box {
          position: absolute;
          bottom: 5.5rem;
          right: 0;
          width: 360px;
          max-height: 600px;
          background: #ffffff;
          border-radius: 1.5rem;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          animation: slideUp 300ms ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          border-radius: 1.5rem 1.5rem 0 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .ai-chat-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
        }

        .ai-chat-close {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 0.25rem;
          border-radius: 0.5rem;
          transition: background 150ms ease;
        }

        .ai-chat-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .ai-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 200px;
        }

        .ai-message {
          display: flex;
          justify-content: flex-start;
          max-width: 90%;
        }

        .ai-message p {
          margin: 0;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .ai-message-bot p {
          background: #f3f4f6;
          color: #111827;
          border-radius: 0.25rem 1rem 1rem 1rem;
        }

        .ai-message-user {
          justify-content: flex-end;
        }

        .ai-message-user p {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          border-radius: 1rem 0.25rem 1rem 1rem;
        }

        .ai-chat-input-group {
          display: flex;
          gap: 0.75rem;
          padding: 1rem;
          border-top: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .ai-chat-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          font-size: 0.95rem;
          font-family: inherit;
          transition: border-color 150ms ease;
        }

        .ai-chat-input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
        }

        .ai-chat-send {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: #ffffff;
          border: none;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: transform 150ms ease;
        }

        .ai-chat-send:hover {
          transform: scale(1.05);
        }

        .ai-chat-send:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}