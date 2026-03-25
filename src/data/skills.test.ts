import { describe, it, expect } from 'vitest';
import { skills } from '../data/skills';
import type { Skill } from '../types/skill';

describe('Skill Data', () => {
  it('should have at least 10 skills', () => {
    expect(skills.length).toBeGreaterThanOrEqual(10);
  });

  it('should have valid skill structure', () => {
    skills.forEach((skill: Skill) => {
      expect(skill).toHaveProperty('id');
      expect(skill).toHaveProperty('name');
      expect(skill).toHaveProperty('description');
      expect(skill).toHaveProperty('category');
      expect(skill).toHaveProperty('author');
      expect(skill).toHaveProperty('installUrl');
      expect(skill).toHaveProperty('installPrompt');
      expect(skill).toHaveProperty('downloads');
      expect(skill).toHaveProperty('stars');
      expect(skill).toHaveProperty('updatedAt');
      expect(skill).toHaveProperty('tags');
    });
  });

  it('should have unique IDs', () => {
    const ids = skills.map((s) => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have valid download counts', () => {
    skills.forEach((skill) => {
      expect(skill.downloads).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(skill.downloads)).toBe(true);
    });
  });

  it('should have valid star counts', () => {
    skills.forEach((skill) => {
      expect(skill.stars).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(skill.stars)).toBe(true);
    });
  });

  it('should have non-empty tags array', () => {
    skills.forEach((skill) => {
      expect(skill.tags.length).toBeGreaterThan(0);
    });
  });

  it('should have valid date format', () => {
    skills.forEach((skill) => {
      const date = new Date(skill.updatedAt);
      expect(date.toString()).not.toBe('Invalid Date');
    });
  });
});
