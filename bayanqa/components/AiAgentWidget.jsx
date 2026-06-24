import { useState, useRef, useEffect } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";


export default function AiAgentWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm Bayan QA Assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thanks for your question! Our team is here to help. How else can I assist you?",
        },
      ]);
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

          <div
            className="ai-chat-messages"
            ref={messagesContainerRef}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`ai-message ai-message-${msg.sender}`}
              >
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
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
    </div>
  );
}