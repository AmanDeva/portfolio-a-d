import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

interface Message {
  text: string;
  isBot: boolean;
}

async function query(message: string) {
  const response = await fetch(
    "https://e7wey2tivhyf8iw2.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        "inputs": message,
        "parameters": {
          "max_new_tokens": 150
        }
      }),
    }
  );
  const result = await response.json();
  return result[0]?.generated_text || "I apologize, but I couldn't generate a response at the moment.";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Aman's AI assistant. How can I help you learn more about his work?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await query(userMessage);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "I apologize, but I'm having trouble connecting right now. Please try again later.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-4 w-80 h-96 bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl flex flex-col"
          >
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="font-semibold">Chat with AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  message={message.text}
                  isBot={message.isBot}
                />
              ))}
              {isLoading && (
                <div className="flex justify-center">
                  <div className="animate-pulse text-purple-400">Thinking...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}