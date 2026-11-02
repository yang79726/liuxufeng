import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';
import degrees from '../resume/degrees';
import work from '../resume/work';

function getAllDataFiles(dir: string): string[] {
  let results: string[] = [];
  const list = readdirSync(dir);
  for (const file of list) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!file.includes('__tests__') && !file.includes('node_modules')) {
        results = results.concat(getAllDataFiles(fullPath));
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

describe('Cybersecurity & Personal Privacy Protection Audit', () => {
  const dataDir = join(__dirname, '..');
  const files = getAllDataFiles(dataDir);

  it('contains zero 18-digit Chinese resident ID card numbers across all data files', () => {
    const idCardRegex = /\b[1-9]\d{5}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dXx]\b/;
    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(idCardRegex);
    }
  });

  it('contains zero 11-digit mobile phone numbers across all data files', () => {
    const phoneRegex = /\b1[3-9]\d{9}\b/;
    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(phoneRegex);
    }
  });

  it('contains zero student IDs (学号 32023...) across all data files', () => {
    const studentIdRegex = /\b32023\d{7}\b/;
    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      expect(content).not.toMatch(studentIdRegex);
    }
  });

  it('does NOT contain forbidden recommendation/paper/work keywords', () => {
    const forbiddenKeywords = [
      '推荐免试',
      '推免资格',
      '保研',
      'AJST',
      '班级骨干',
      '易智瑞竞赛队长',
      '家庭教师',
    ];

    for (const keyword of forbiddenKeywords) {
      expect(aboutMarkdown).not.toContain(keyword);
      for (const job of work) {
        expect(job.name).not.toContain(keyword);
        expect(job.position).not.toContain(keyword);
        expect(job.summary || '').not.toContain(keyword);
      }
    }
  });

  it('accurately uses the specified GPA & Ranking standard format', () => {
    const expectedGpaRank = 'GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34';
    expect(aboutMarkdown).toContain(expectedGpaRank);

    const degreeSummary = degrees[0].degree;
    expect(degreeSummary).toContain(expectedGpaRank);
  });
});
