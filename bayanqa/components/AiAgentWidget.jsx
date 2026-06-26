import ReactMarkdown from "react-markdown";
import { useState, useRef, useEffect } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useChat } from "@/context/ChatContext";

export default function AiAgentWidget() {
  const { isChatOpen, setIsChatOpen } = useChat(); // ← from context
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm Bayan QA Assistant. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || loading) return;

    const userMessage = { id: Date.now(), sender: "user", text: inputValue };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply ?? "Sorry, I couldn't get a response.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
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

          <div className="ai-chat-messages" ref={messagesContainerRef}>
            {messages.map((msg) => (
<div key={msg.id} className={`ai-message ai-message-${msg.sender}`}>
  <ReactMarkdown
    components={{
      a: ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
          {children}
        </a>
      ),
      p: ({ children }) => <p style={{ margin: "0 0 0.5rem 0" }}>{children}</p>,
      ul: ({ children }) => <ul style={{ margin: "0.5rem 0", paddingLeft: "1.25rem" }}>{children}</ul>,
      ol: ({ children }) => <ol style={{ margin: "0.5rem 0", paddingLeft: "1.25rem" }}>{children}</ol>,
      li: ({ children }) => <li style={{ marginBottom: "0.25rem" }}>{children}</li>,
      strong: ({ children }) => <strong style={{ fontWeight: "600" }}>{children}</strong>,
    }}
  >
    {msg.text}
  </ReactMarkdown>
</div>
            ))}
            {loading && (
              <div className="ai-message ai-message-bot">
                <p>Typing...</p>
              </div>
            )}
          </div>

          <div className="ai-chat-input-group">
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Ask something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="ai-chat-send"
              onClick={handleSendMessage}
              disabled={loading}
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