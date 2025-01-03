import { motion } from 'framer-motion';
import { LineChart, MessageSquareWarning, Calendar, Printer, Utensils } from 'lucide-react';
import { ProjectsGrid } from './ProjectsGrid';
import type { Project } from './types';

const projects: Project[] = [
  {
    title: "Dev's Paradise",
    description: 'Modern food ordering platform with real-time tracking, Google authentication, and dynamic cart management. Built with TypeScript and Firebase.',
    icon: Utensils,
    link: 'https://dev-s-food-ordering-site-xqzb-aman-devas-projects.vercel.app/',
    color: 'from-red-600 to-yellow-500',
    tech: ['TypeScript', 'React', 'Firebase', 'Google OAuth'],
  },
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

export default function ProjectsSection() {
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

        <ProjectsGrid projects={projects} />
      </motion.div>
    </section>
  );
}