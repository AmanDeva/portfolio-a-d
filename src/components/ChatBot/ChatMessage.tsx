import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
          <Bot className="w-5 h-5" />
        </div>
      )}
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? 'bg-white/10 text-white'
            : 'bg-purple-600 text-white ml-auto'
        }`}
      >
        {message}
      </div>
      {!isBot && (
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
          <User className="w-5 h-5" />
        </div>
      )}
    </motion.div>
  );
}