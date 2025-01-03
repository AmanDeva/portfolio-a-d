import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group h-full perspective"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
        style={{ backgroundImage: `linear-gradient(to right, ${project.color})` }}
      />
      <motion.div 
        whileHover={{ rotateY: 10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 transform-gpu"
      >
        <div className="flex items-center mb-4">
          <project.icon className={`w-8 h-8 mr-3 text-transparent bg-clip-text bg-gradient-to-r ${project.color}`} />
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </div>
        
        <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <motion.a
          whileHover={{ x: 5 }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white/80 hover:text-white group"
        >
          View Project 
          <motion.span
            whileHover={{ x: 3 }}
            className="ml-2"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}