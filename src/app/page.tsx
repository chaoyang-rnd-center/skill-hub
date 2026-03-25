'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { SearchFilter } from '@/components/search-filter';
import { SkillCard } from '@/components/skill-card';
import { skills } from '@/data/skills';
import { Category, SortOption } from '@/types/skill';
import { Button } from '@/components/ui/button';
import { Code2, ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<SortOption>('downloads');

  const filteredSkills = useMemo(() => {
    let result = [...skills];

    if (selectedCategory !== 'All') {
      result = result.filter((skill) => skill.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (skill) =>
          skill.name.toLowerCase().includes(query) ||
          skill.description.toLowerCase().includes(query) ||
          skill.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'downloads':
          return b.downloads - a.downloads;
        case 'stars':
          return b.stars - a.stars;
        case 'updatedAt':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalDownloads = skills.reduce((acc, s) => acc + s.downloads, 0);

  return (
    <div className="min-h-screen bg-[hsl(210,20%,98%)]">
      <Header />

      {/* Hero Section - Calcite Style */}
      <section className="bg-white border-b border-[hsl(210,16%,90%)]">
        <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(210,100%,96%)] text-[hsl(210,100%,38%)] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Discover Agent Skills
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-[hsl(0,0%,14%)] tracking-tight">
              Find the Perfect Skill for Your Agent
            </h1>

            <p className="text-base text-[hsl(210,8%,45%)] mt-4 max-w-lg leading-relaxed">
              Browse, discover, and install community-built skills to supercharge your AI agents. 
              One-click installation, endless possibilities.
            </p>

            <div className="flex items-center gap-2 mt-6">
              <Button className="gap-1.5">
                <Code2 className="w-4 h-4" />
                Browse Skills
              </Button>
              <Button variant="outline" className="gap-1.5">
                Submit Your Skill
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Stats - Calcite Style */}
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-[hsl(210,16%,90%)] w-full justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold text-[hsl(0,0%,14%)]">{skills.length}</div>
                <div className="text-xs text-[hsl(210,8%,45%)] mt-0.5">Skills</div>
              </div>
              <div className="w-px h-10 bg-[hsl(210,16%,90%)]" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-[hsl(0,0%,14%)]">{(totalDownloads / 1000).toFixed(0)}k</div>
                <div className="text-xs text-[hsl(210,8%,45%)] mt-0.5">Downloads</div>
              </div>
              <div className="w-px h-10 bg-[hsl(210,16%,90%)]" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-[hsl(0,0%,14%)]">{CATEGORIES.length - 1}</div>
                <div className="text-xs text-[hsl(210,8%,45%)] mt-0.5">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded border border-[hsl(210,16%,90%)] p-4 md:p-6">
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultCount={filteredSkills.length}
          />

          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-12 h-12 rounded-full bg-[hsl(210,20%,96%)] flex items-center justify-center mb-3">
                <Code2 className="w-6 h-6 text-[hsl(210,8%,45%)]" />
              </div>
              <h3 className="text-sm font-semibold text-[hsl(0,0%,14%)] mb-1">No skills found</h3>
              <p className="text-sm text-[hsl(210,8%,45%)]">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer - Calcite Style */}
      <footer className="bg-white border-t border-[hsl(210,16%,90%)] mt-auto">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-[hsl(210,100%,38%)]">
                <Code2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-sm">SkillHub</span>
            </div>
            <p className="text-xs text-[hsl(210,8%,45%)]">
              © 2024 SkillHub. Built for the AI agent community.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="text-[hsl(210,8%,45%)] hover:text-[hsl(210,100%,38%)] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-[hsl(210,8%,45%)] hover:text-[hsl(210,100%,38%)] transition-colors">
                Terms
              </a>
              <a href="#" className="text-[hsl(210,8%,45%)] hover:text-[hsl(210,100%,38%)] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const CATEGORIES = [
  'All',
  'Development',
  'Productivity',
  'AI',
  'DevOps',
  'Testing',
  'Documentation',
  'Utilities',
  'Communication',
];
