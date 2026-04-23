export interface Course {
  title: string;
  number?: string;      // 保留你要求的 number 字段
  link?: string;
  university: string;
}

const courses: Course[] = [
  // ===== 主修课程：地理信息科学 =====
  {
    title: 'GIS空间分析',
    number: 'score:82',
    university: '兰州大学',
  },
  {
    title: '遥感概论',
    number: 'score:97',
    university: '兰州大学',
  },
  {
    title: '遥感图像处理',
    number: 'score:92',
    university: '兰州大学',
  },
  {
    title: 'C语言程序设计',
    number: 'score:82',
    university: '兰州大学',
  },
  {
    title: 'Python程序设计',
    number: 'score:95',
    university: '兰州大学',
  },
  
  // ===== 辅修课程：通信工程 =====
  {
    title: '通信原理',
    number: 'score:78',
    university: '兰州大学',
  },
  {
    title: '信号处理',
    number: 'score:78',
    university: '兰州大学',
  },
  {
    title: '数字信号处理',
    number: 'score:81',
    university: '兰州大学',
  },
  {
    title: '电路分析',
    number: 'score:93',
    university: '兰州大学',
  },
];

export default courses;