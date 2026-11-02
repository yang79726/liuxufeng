import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section with GPA and rank', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('刘旭峰');
    expect(aboutMarkdown).toContain('GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34');
  });

  it('contains the history section', () => {
    expect(aboutMarkdown).toContain('# Some History');
    expect(aboutMarkdown).toContain('兰州大学');
  });

  it('contains the discipline understanding section', () => {
    expect(aboutMarkdown).toContain('# 我的学科理解');
    expect(aboutMarkdown).toContain('遥感');
    expect(aboutMarkdown).toContain('GPS');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# I Like');
    expect(aboutMarkdown).toContain('Python');
  });

  it('contains the awards and honors section', () => {
    expect(aboutMarkdown).toContain('# 荣誉与奖项');
    expect(aboutMarkdown).toContain('计算机设计大赛');
  });

  it('contains valid markdown links', () => {
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(0);
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(3);
  });
});
