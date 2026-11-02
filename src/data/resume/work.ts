/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'MoneyLens 智能财务分析助手',
    position: '项目负责人 / 核心开发者（2026中国大学生计算机设计大赛省级一等奖）',
    url: 'https://github.com/yang79726/moneylens',
    startDate: '2025-11-01',
    summary: '独立设计并开发跨平台个人账单分析与可视化助手，坚持本地优先与隐私保护，荣获2026中国大学生计算机设计大赛省级一等奖。',
    highlights: [
      '设计基于时空滑动窗口的跨平台数据清洗算法，实现微信与支付宝账单精准去重',
      '基于改进 TF-IDF 文本特征实现账单二级智能分类，构建生活成本感知换算模型',
      '完成 PWA 与 Android 原生应用封装，基于 MediaStore 机制实现安全可靠的离线文件存储',
    ],
  },
  {
    name: '山地气候树线模拟研究与算法开发',
    position: '项目负责人',
    url: 'https://github.com/yang79726',
    startDate: '2026-05-01',
    endDate: '2027-04-30',
    summary: '主持校级大学生创新训练项目，负责全球树线机理模型本地化修正、多源空间数据融合与机器学习分类建模。',
    highlights: [
      '主导模型失效诊断，提出连续 VPD 衰减函数替代二值化水分约束，21站点生长季预测 MAE 显著降低',
      '融合 GEE 卫星遥感、SRTM 30m DEM 与激光雷达林冠高度数据重构纯净训练样本集',
      '基于 XGBoost 与 SHAP 算法构建树线分类器与特征可解释性分析体系',
    ],
  },
  {
    name: '兰州市土地利用类型分类与遥感处理',
    position: '项目成员',
    url: 'https://github.com/yang79726',
    startDate: '2024-05-01',
    endDate: '2024-08-31',
    summary: '基于长时序卫星遥感影像，完成兰州市土地利用类型提取、空间分析制图与精度评价。',
    highlights: [
      '使用 Google Earth Engine (GEE) 开展遥感影像批量预处理与特征波段运算',
      '利用 ArcGIS 与 ENVI 软件完成专题地图制作、空间叠加分析与分类精度评估',
    ],
  },
  {
    name: '运城盐湖水体边界提取及富营养化评价',
    position: '项目成员',
    url: 'https://github.com/yang79726',
    startDate: '2025-09-01',
    endDate: '2025-10-31',
    summary: '结合遥感水体指数与实测水文数据，完成运城盐湖水体边界动态提取与富营养化时序评价。',
    highlights: [
      '基于 ENVI/IDL 编写批处理算法脚本，自动化提取水体反射光谱特征',
      '运用归一化差值水体指数 (NDWI) 揭示盐湖水体面积季节性时空变化规律',
    ],
  },
];

export default work;
