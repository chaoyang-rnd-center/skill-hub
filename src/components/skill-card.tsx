'use client';

import { useState } from 'react';
import { Skill } from '@/types/skill';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Star, Copy, Check, ExternalLink } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(skill.installPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <Card className="group flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors truncate">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-xs font-medium">
                {skill.author.charAt(0).toUpperCase()}
              </span>
              <span className="truncate">{skill.author}</span>
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {skill.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {skill.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-border/50 flex-col gap-3">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5" title="Downloads">
              <Download className="w-4 h-4" />
              <span className="font-medium">{formatNumber(skill.downloads)}</span>
            </span>
            <span className="flex items-center gap-1.5" title="Stars">
              <Star className="w-4 h-4" />
              <span className="font-medium">{formatNumber(skill.stars)}</span>
            </span>
          </div>
          <span className="text-xs">Updated {formatDate(skill.updatedAt)}</span>
        </div>

        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Install
              </>
            )}
          </Button>
          <a href={skill.installUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="px-3"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
