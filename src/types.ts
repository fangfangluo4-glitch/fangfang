export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'frontend' | 'fullstack' | 'design' | 'mobile';
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number; // 0-100
  iconName: string; // Lucide icon name
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
  type: 'work' | 'education';
}

export type PersonaType = 'developer' | 'designer';

export interface PersonaContent {
  title: string;
  subtitle: string;
  bio: string;
  skillsText: string;
  projectsText: string;
}
