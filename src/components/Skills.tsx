import { motion } from 'framer-motion';
import { Code2, Brain, Database, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Problem Solving',
    icon: Code2,
    skills: [
      'LeetCode 1700+ Rating',
      'Data Structures',
      'Algorithms',
      'Competitive Programming',
    ],
  },
  {
    title: 'Data Science & ML',
    icon: Brain,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Time Series Analysis',
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      'Python',
      'Data Visualization',
      'Statistical Analysis',
      'Big Data',
    ],
  },
  {
    title: 'Web Development',
    icon: Layout,
    skills: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Firebase',
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 mr-3 text-purple-400" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="bg-white/5 rounded-lg p-3 text-center"
                  >
                    <p className="text-sm">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}