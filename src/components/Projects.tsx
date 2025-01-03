import { motion } from 'framer-motion';
import { LineChart, MessageSquareWarning, Calendar, Printer, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Hate Speech Detection',
    description: 'AI-powered system for detecting and analyzing hate speech and abusive language on Twitter using advanced NLP techniques.',
    icon: MessageSquareWarning,
    link: 'https://twitter-hate-speech-detector-app-aman-deva-w69obbj4kdq.streamlit.app/',
    color: 'from-purple-600 to-pink-500',
    tech: ['Python', 'NLP', 'Machine Learning', 'Streamlit'],
  },
  {
    title: 'Time Series Forecasting',
    description: 'Advanced stock market analysis using time series forecasting techniques to predict market trends and patterns with high accuracy.',
    icon: LineChart,
    link: 'https://github.com/AmanDeva/Time-series-analysis-stock-market/tree/main',
    color: 'from-blue-600 to-cyan-500',
    tech: ['Python', 'Machine Learning', 'Time Series Analysis'],
  },
  {
    title: 'Routine Master',
    description: 'Full-stack web application built with TypeScript, React, and Firebase. Features dynamic scheduling, real-time updates, and intuitive task management.',
    icon: Calendar,
    link: 'https://routine-maker.vercel.app/',
    color: 'from-emerald-600 to-teal-500',
    tech: ['TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: '2D Plotter',
    description: 'Arduino-based 2D plotter capable of drawing computer-processed binary images on paper using precise motor control and G-code instructions.',
    icon: Printer,
    link: 'https://www.youtube.com/watch?v=dLojHmgkanA',
    color: 'from-orange-600 to-red-500',
    tech: ['Arduino', 'CNC Shield', 'G-code', 'Inkscape'],
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                style={{ backgroundImage: `linear-gradient(to right, ${project.color})` }}
              />
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <project.icon className={`w-8 h-8 mr-3 text-transparent bg-clip-text bg-gradient-to-r ${project.color}`} />
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/80 hover:text-white"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}