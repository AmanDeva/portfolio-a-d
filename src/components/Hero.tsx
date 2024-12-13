import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Mail, Linkedin, Code2 } from 'lucide-react';
import Background3D from './Background3D';
import FloatingIcons from './FloatingIcons';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <Background3D />
      <FloatingIcons />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Aman Deva
        </motion.h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-[40px]">
          <TypeAnimation
            sequence={[
              'Data Scientist',
              1000,
              'ML Engineer',
              1000,
              'Full Stack Developer',
              1000,
              'Problem Solver',
              1000,
            ]}
            wrapper="span"
            speed={30}
            deletionSpeed={50}
            repeat={Infinity}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-4 max-w-2xl mx-auto"
        >
          Final year B.Tech student at NIT Allahabad, passionate about building AI-powered solutions 
          and full-stack applications that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 inline-flex items-center">
            <Code2 className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">LeetCode:</span>
            <span className="ml-2 text-white">1700+ Rating</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/AmanDeva"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://leetcode.com/u/Aman963lovescoding/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Code2 className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/aman-deva/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:devaaman8@gmail.com"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/30 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}