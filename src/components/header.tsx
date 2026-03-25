'use client';

import { Code2, GitBranch, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(210,16%,90%)] bg-white/95 backdrop-blur-sm">
      <div className="container flex h-12 items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-7 h-7 rounded bg-[hsl(210,100%,38%)]">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-base text-[hsl(0,0%,14%)]">SkillHub</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {['Skills', 'Categories', 'Documentation', 'Submit'].map((item, i) => (
            <a 
              key={item}
              href="#" 
              className={cn(
                "px-3 py-1.5 rounded transition-colors",
                i === 0 
                  ? "text-[hsl(210,100%,38%)] font-medium bg-[hsl(210,100%,96%)]" 
                  : "text-[hsl(210,8%,45%)] hover:text-[hsl(0,0%,14%)] hover:bg-[hsl(210,14%,96%)]"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <GitBranch className="w-4 h-4" />
            </Button>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Globe className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
