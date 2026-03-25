'use client';

import { Code2, GitBranch, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">SkillHub</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-foreground transition-colors hover:text-primary">
            Skills
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
            Categories
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
            Documentation
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
            Submit
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <GitBranch className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Globe className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
