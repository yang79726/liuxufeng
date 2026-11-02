import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: '刘旭峰 | 个人主页',
  description:
    '刘旭峰，兰州大学地理信息科学专业本科生，辅修通信工程。GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34。曾获中国大学生计算机设计大赛省级一等奖，专注遥感、GIS与Python算法开发。',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
