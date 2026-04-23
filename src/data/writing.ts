export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

const data: WritingItem[] = [
  
  {
  title: "空间数据的坐标系统管理与投影变换",
  url: "https://blog.csdn.net/2401_89001225/article/details/160294609",
  date: "2025-10-15",
  description: "GIS空间分析前必须确保数据在空间上匹配。本文系统梳理了坐标系统的类型、投影变换的三种情况。",
  },
  {
  title: "组合数字电路实验：奇偶校验与加法器设计",
  url: "https://zhuanlan.zhihu.com/p/2029135345501970566",
  date: "2026-04-19",
  description: "掌握组合逻辑电路设计、偶校验位产生电路、一位全加器 Multisim 仿真。",
  },
  {
  title: "空间数据库学习笔记",
  url: "https://mud-bay-d1d.notion.site/32ddd6fe15e2457f922dbc6420934f71",
  date: "2024-12-19",
  description: "空间数据库基础概念、数据模型、存储与索引、GIS 空间数据管理",
  },
  {
  title: "区域规划课程笔记",
  url: "https://mud-bay-d1d.notion.site/1d576a85431f8036a2fdca66e26f853a",
  date: "2025-05-19",
  description: "区域规划理论、方法、空间结构、政策分析与案例实践",
  },
  {
  title: "遥感图像处理课程笔记",
  url: "https://mud-bay-d1d.notion.site/20d76a85431f80e4b51dcea1c542da30",
  date: "2025-06-19",
  description: "采样量化、直方图均衡化、几何校正、辐射校正、影像增强、植被指数、监督/非监督分类",
  },
  // 阅读 / 人文笔记（非技术）
  {
    title: "微信读书笔记体系",
    url: "https://mud-bay-d1d.notion.site/19e03becf38a44c7aba3d8221559f826",
    date: "2023-09-19",
    description: "Notion + 微信读书联动：书籍管理、阅读进度、笔记卡片盒",
  },
];

export default data;
