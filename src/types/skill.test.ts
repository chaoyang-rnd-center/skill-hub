import { describe, it, expect } from 'vitest';
import { CATEGORIES, type Category, type SortOption } from './skill';

describe('Skill Types', () => {
  describe('CATEGORIES', () => {
    it('should include All category', () => {
      expect(CATEGORIES).toContain('All');
    });

    it('should have unique categories', () => {
      const unique = new Set(CATEGORIES);
      expect(unique.size).toBe(CATEGORIES.length);
    });

    it('should have at least 5 categories', () => {
      expect(CATEGORIES.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe('Category type', () => {
    it('should accept valid category values', () => {
      const validCategory: Category = 'Development';
      expect(validCategory).toBe('Development');
    });
  });

  describe('SortOption type', () => {
    it('should accept valid sort options', () => {
      const validSorts: SortOption[] = ['downloads', 'stars', 'updatedAt', 'name'];
      validSorts.forEach((sort) => {
        expect(['downloads', 'stars', 'updatedAt', 'name']).toContain(sort);
      });
    });
  });
});
