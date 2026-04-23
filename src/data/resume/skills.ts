export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // ===== 开发语言 =====
  {
    title: 'Python',
    competency: 4,
    category: ['开发语言', '数据分析'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['开发语言'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['开发语言', '数据分析'],
  },

  // ===== 遥感与GIS =====
  {
    title: 'ArcGIS',
    competency: 4,
    category: ['遥感与GIS'],
  },
  {
    title: 'ENVI/IDL',
    competency: 4,
    category: ['遥感与GIS'],
  },
  {
    title: 'GEE (Google Earth Engine)',
    competency: 4,
    category: ['遥感与GIS', '云计算'],
  },
 
  {
    title: 'AutoCAD',
    competency: 3,
    category: ['遥感与GIS', '设计工具'],
  },

  // ===== 通信与信号处理 =====
  {
    title: 'MATLAB',
    competency: 4,
    category: ['通信与信号处理', '数据分析'],
  },
  {
  title: 'Multisim',
  competency: 3,
  category: ['电路与仿真', '通信与信号处理'],
  },


  // ===== 数据分析 =====
  {
    title: 'Pandas',
    competency: 3,
    category: ['数据分析'],
  },

  {
    title: 'Excel',
    competency: 4,
    category: ['数据分析'],
  },

  // ===== 其他工具 =====
  {
    title: 'PyCharm',
    competency: 4,
    category: ['其他工具', 'IDE'],
  },
  {
    title: 'RStudio',
    competency: 3,
    category: ['其他工具', 'IDE'],
  },
  {
    title: 'VS Code',
    competency: 4,
    category: ['其他工具'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' }, // #6968b3 - dark bg
  { color: 'var(--color-skill-2)', textColor: 'dark' }, // #37b1f5 - light bg
  { color: 'var(--color-skill-3)', textColor: 'light' }, // #40494e - dark bg
  { color: 'var(--color-skill-4)', textColor: 'light' }, // #515dd4 - dark bg
  { color: 'var(--color-skill-5)', textColor: 'dark' }, // #e47272 - light bg
  { color: 'var(--color-skill-6)', textColor: 'dark' }, // #cc7b94 - light bg
];

// Fallback colors for categories beyond the predefined set
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };