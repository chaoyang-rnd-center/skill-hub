export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
  authorAvatar?: string;
  installUrl: string;
  installPrompt: string;
  downloads: number;
  stars: number;
  updatedAt: string;
  tags: string[];
}

export type SortOption = 'downloads' | 'updatedAt' | 'name' | 'stars';

export const CATEGORIES = [
  'All',
  'Development',
  'Productivity',
  'AI',
  'DevOps',
  'Testing',
  'Documentation',
  'Utilities',
  'Communication',
] as const;

export type Category = (typeof CATEGORIES)[number];
