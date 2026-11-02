export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
  status?: string;
}

const data: Project[] = [
  {
    title: 'MoneyLens 智能财务分析助手',
    subtitle: '跨平台个人账单分析 · 2026计算机设计大赛省级一等奖',
    link: 'https://github.com/yang79726/moneylens',
    image: '/images/projects/moneylens.png',
    date: '2025-11-01',
    desc: '坚持本地优先与隐私保护的跨平台账单分析工具。采用时空滑动窗口去重与改进 TF-IDF 文本特征自动分类，支持将支出感知换算为“大米”和“工时”，已封装为 PWA 与 Android 原生应用。',
    tech: ['Python', 'Pandas', 'Flask', 'PWA', 'Android'],
    featured: true,
  },
  {
    title: '张掖绿洲地表温度遥感分析与监测大屏',
    subtitle: 'GEE 遥感反演 + 机器学习归因 + Streamlit 大屏',
    link: 'https://github.com/yang79726/zhangye-lst-analysis',
    image: '/images/projects/CQ_LST_Final_Fixed.png',
    date: '2026-06-01',
    desc: '基于 Google Earth Engine 平台反演 Landsat 长时序地表温度（LST），融合 ERA5-Land 气象数据与气象站点观测，利用随机森林与 SHAP 揭示水热驱动机制，构建交互式监测大屏与预警架构。',
    tech: ['GEE', 'Python', 'Random Forest', 'SHAP', 'Streamlit'],
    featured: true,
  },
  {
    title: '重庆都市区热岛效应时空演变与驱动分析',
    subtitle: '遥感 + GIS + 空间统计分析',
    link: 'https://github.com/yang79726/chongqing-heat-island',
    image: '/images/projects/CQ_LST_Final_Fixed.png',
    date: '2024-05-01',
    desc: '基于长时序 Landsat 遥感影像，构建“数据制备-反演处理-空间制图”工作流，定量分析重庆都市区多中心热岛格局演变及城市扩张态势，探究地表覆盖对地温的调节机制。',
    tech: ['GEE', 'ArcMap', 'ENVI', 'R语言', 'LST反演'],
    featured: true,
  },
  {
    title: '山地气候树线模拟与机器学习分类系统',
    subtitle: '机理模型本地化修正 + 机器学习分类',
    link: 'https://github.com/yang79726',
    image: '/images/projects/yuncheng-lake.jpg',
    date: '2026-05-01',
    desc: '针对祁连山复杂地理环境修正全球树线机理模型的水分约束函数，结合 GEE 遥感数据、SRTM 30m DEM 与激光雷达冠层高度产品重构样本，基于 XGBoost 构建高精度树线分类器。',
    tech: ['Python', 'XGBoost', 'SHAP', 'GEE', 'LiDAR'],
  },
  {
    title: 'HTML生成PPT演示文稿工具',
    subtitle: 'Markdown 快速生成轻量幻灯片',
    image: '/images/projects/html2ppt.png',
    date: '2025-01-01',
    desc: '基于 HTML/CSS/JavaScript 的轻量级演示文稿制作工具，支持 Markdown 语法实时转幻灯片、在线编辑、主题切换与离线导出，提高技术汇报排版效率。',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Markdown'],
  },
];

export default data;
