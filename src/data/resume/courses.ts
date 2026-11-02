export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  // ===== 地理信息与空间数据 =====
  {
    title: '空间数据库',
    number: 'GIS-01 (Score: 98)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '地理信息系统原理与实验',
    number: 'GIS-02 (Score: 94)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '空间数据采集与管理',
    number: 'GIS-03 (Score: 99)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: 'GIS空间分析',
    number: 'GIS-04 (Score: 85)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '计算机辅助设计 (AutoCAD)',
    number: 'GIS-05 (Score: 93)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },

  // ===== 遥感科学与图像处理 =====
  {
    title: '遥感概论',
    number: 'RS-01 (Score: 97)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '遥感数字图像处理',
    number: 'RS-02 (Score: 97)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '数字摄影测量学',
    number: 'RS-03 (Score: 96)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '遥感地学分析',
    number: 'RS-04 (Score: 92)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '卫星导航定位技术应用',
    number: 'RS-05 (Score: 90)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },

  // ===== 计算机编程与数学基础 =====
  {
    title: '计量地理学',
    number: 'CS-01 (Score: 98)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '概率论与数理统计',
    number: 'CS-02 (Score: 96)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '高等数学 A',
    number: 'CS-03 (Score: 95)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: 'Python 程序设计与实践',
    number: 'CS-04 (Score: 96)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: 'C语言程序设计',
    number: 'CS-05 (Score: 82)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },

  // ===== 通信工程（辅修） =====
  {
    title: '电路分析与模拟电子线路',
    number: 'EE-01 (Score: 90)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '信号与系统',
    number: 'EE-02 (Score: 78)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
  {
    title: '通信原理',
    number: 'EE-03 (Score: 78)',
    link: 'https://www.lzu.edu.cn',
    university: '兰州大学',
  },
];

export default courses;
