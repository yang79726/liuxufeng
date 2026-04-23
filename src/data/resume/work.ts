/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: '兰州市土地利用类型分类',
    position: '小组项目成员',
    startDate: '2024-05',
    endDate: '2024-08',
    summary: '基于 Landsat / Sentinel 遥感影像，完成兰州市土地利用类型提取与精度验证。',
    highlights: [
      '使用 GEE（Google Earth Engine）进行遥感影像预处理与波段计算',
      '利用 ArcGIS 完成专题图制作与空间分析',
      '使用 ENVI 进行图像分类后处理与精度评估',
    ],
  },
  {
    name: '运城盐湖水体边界提取及富营养化评价',
    position: '小组项目成员',
    startDate: '2025-09',
    endDate: '2025-10',
    summary: '结合水体指数与实测数据，完成运城盐湖水体边界提取与富营养化时序评价。',
    highlights: [
      '使用 ENVI/IDL 进行波段运算与批处理脚本编写',
      '基于 NDWI（归一化水体指数）提取水体边界',
    ],
  },
  {
    name: 'MoneyLens（财务数据聚合工具）',
    position: '开发者',
    url: 'https://github.com/yang79726/moneylens',
    startDate: '2025-11',
    endDate: '至今',
    summary: '跨微信、支付宝个人账单可视化分析工具，支持本地运行，保护用户隐私。',
    highlights: [
      '使用 Python + Pandas 进行账单数据清洗与聚合',
      '使用 Plotly 实现支出分类可视化与趋势分析',
      '将支出换算为“大米”和“工作时长”，增强感知',
      '集成 DeepSeek API 提供个性化理财建议',
      '项目地址：https://github.com/yang79726/moneylens',
    ],
  },
  {
    name: '个人问答大模型网站',
    position: '全栈开发者',
    startDate: '2023-12',
    endDate: '2024-12',
    summary: '整合 AI 模型接口，搭建对话式问答网站，并完成运营推广。',
    highlights: [
      '整合大模型 API，实现智能问答功能',
      '完成网站前端界面开发与交互优化',
      '负责网站运营与用户推广',
      '2024年12月，网站停止运营',

    ],
  },
  {
    name: 'HTML生成PPT工具',
    position: '学习项目',
    startDate: '2026-01',
    endDate: '2026-03',
    summary: '基于 HTML 的 PPT 生成工具，支持在线编辑与导出。',
    highlights: [
      '开源代码本地部署',
      '实现 Markdown 到 HTML 的转换与分页',
      '提升演示文稿制作效率',
    ],
  },
  {
    name: '兰州大学',
    position: '班级组织委员 ',
    startDate: '2023-09',
    endDate: '2024-08',
    summary: '负责班级活动组织与遥感竞赛团队管理。',
    highlights: [
      '组织班级日常事务与团队建设活动',

    ],
  },
    {
    name: '兰州大学',
    position: '易智瑞杯竞赛队长',
    startDate: '2025-05',
    endDate: '2025-08',
    summary: '负责班级活动组织与遥感竞赛团队管理。',
    highlights: [
      '带领团队完成易智瑞杯遥感竞赛项目',
      
    ],
  },
  {
    name: '家庭教师',
    position: '数理辅导教师',
    startDate: '2024-03',
    endDate: '2024-12',
    summary: '在兰州教授高中物理、数学，提供家庭辅导与作业解答。',
    highlights: [
      '辅导高中物理、数学课程',
      '帮助学生提升学习成绩与解题能力',
      '锻炼沟通表达与知识输出能力',
    ],
  },
];

export default work;
