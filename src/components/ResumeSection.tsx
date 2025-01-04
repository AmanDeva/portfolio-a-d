import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex justify-center"
      >
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FileDown className="w-5 h-5 mr-2" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}