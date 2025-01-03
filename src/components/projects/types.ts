import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
  tech: string[];
}