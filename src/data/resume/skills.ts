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
    competency: 5,
    category: ['开发语言', '数据与算法'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['开发语言'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['开发语言', '数据与算法'],
  },

  // ===== 遥感与GIS =====
  {
    title: 'ArcGIS / ArcMap',
    competency: 4,
    category: ['遥感与GIS'],
  },
  {
    title: 'ENVI / IDL',
    competency: 4,
    category: ['遥感与GIS'],
  },
  {
    title: 'GEE (Google Earth Engine)',
    competency: 4,
    category: ['遥感与GIS'],
  },
  {
    title: 'AutoCAD',
    competency: 3,
    category: ['遥感与GIS'],
  },

  // ===== 数据与算法 =====
  {
    title: 'Pandas & NumPy',
    competency: 4,
    category: ['数据与算法'],
  },
  {
    title: 'XGBoost & SHAP',
    competency: 4,
    category: ['数据与算法'],
  },
  {
    title: 'Excel 数据建模',
    competency: 4,
    category: ['数据与算法'],
  },

  // ===== 通信与信号处理 =====
  {
    title: 'MATLAB 信号处理',
    competency: 4,
    category: ['通信与信号处理'],
  },
  {
    title: 'Multisim 电路仿真',
    competency: 3,
    category: ['通信与信号处理'],
  },

  // ===== 工程开发与工具 =====
  {
    title: 'Flask / Web API',
    competency: 4,
    category: ['工程与工具'],
  },
  {
    title: 'Git & GitHub',
    competency: 4,
    category: ['工程与工具'],
  },
  {
    title: 'VS Code & PyCharm',
    competency: 4,
    category: ['工程与工具'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

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
