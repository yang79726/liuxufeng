export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: '兰州大学 (Lanzhou University)',
    degree:
      '地理信息科学 本科 (辅修: 通信工程) | GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34 | 兰州大学优秀学生一等奖学金',
    link: 'https://www.lzu.edu.cn',
    year: 2027,
  },
];

export default degrees;
