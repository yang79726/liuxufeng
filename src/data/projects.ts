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
    title: '重庆都市区热岛效应分析',
    subtitle: '遥感 + GIS + 统计分析',
    link: 'https://github.com/yang79726/chongqing-heat-island',
    image: '/images/projects/CQ_LST_Final_Fixed.png',
    date: '2024 – 2025',
    desc: '基于2000-2025年Landsat长时序影像，构建“数据制备-影像处理-分析制图”完整工作流，揭示重庆都市区热岛效应的时空演变特征及驱动机制。研究发现：城区呈“单中心-双中心-多中心”扩张态势，NDVI是最敏感降温因子（r=-0.77），NDISI是主导致热因子。',
    tech: ['GEE', 'ArcMap', 'R语言', 'ENVI', 'LST反演', '皮尔逊相关系数'],
    featured: true,
  },
  {
    title: 'MoneyLens',
    subtitle: '财务数据聚合与可视化工具',
    link: 'https://github.com/yang79726/moneylens',
    image: '/images/projects/moneylens.png',
    date: '2024-01 – 至今',
    desc: '跨微信、支付宝个人账单可视化分析，可将支出换算为大米、工作时长，集成DeepSeek API提供理财建议，支持本地运行，高度保护用户隐私。',
    tech: ['Python', 'Pandas', 'Plotly', 'DeepSeek API'],
    featured: true,
  },

  {
    title: '个人问答大模型网站',
    subtitle: 'AI接口整合与运营推广',
    image: '/images/projects/ai-website.png',
    date: '2023-12 – 2024-12',
    desc: '整合大模型API实现智能问答功能，完成网站开发与运营推广。由于成本问题，目前已停止运行。',
    tech: ['AI API', 'Next.js', 'HTML/CSS'],
    status: '已停止运行',
  },
  {
    title: 'HTML生成PPT工具',
    subtitle: '开源代码本地部署',
    image: '/images/projects/html2ppt.png',
    date: '2025-01 – 2025-03',
    desc: '基于HTML/CSS/JS的PPT生成工具，支持Markdown转PPT、在线编辑与导出，提升演示文稿制作效率。',
    tech: ['HTML', 'CSS', 'JavaScript', 'Markdown'],
  },
  {
    title: '运城盐湖水体边界提取及富营养化评价',
    subtitle: '水体指数计算与时序分析',
    image: '/images/projects/yuncheng-lake.jpg',
    date: '2025-09 – 2025-10',
    desc: '结合NDWI水体指数与实测数据，完成运城盐湖水体边界提取与富营养化时序评价，使用ENVI/IDL进行批处理。',
    tech: ['ENVI/IDL', 'NDWI', '水体遥感'],
  },
  {
    title: '机器狗电路焊接',
    subtitle: '硬件实践与电路调试',
    image: '/images/projects/robot-dog.jpg',
    date: '2025-11 – 2025-12',
    desc: '结合辅修通信工程知识，完成机器狗电路的焊接与调试，提升硬件实践能力。',
    tech: ['电路设计', '焊接', 'Multisim'],
  },
];

export default data;