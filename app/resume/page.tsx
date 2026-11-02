import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import PrivacyLock from '@/components/Resume/PrivacyLock';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description:
    '刘旭峰的个人简历 | 兰州大学地理信息科学专业本科，辅修通信工程，GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34。',
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <p className="resume-summary">
            兰州大学地理信息科学专业本科生，主修 GIS 与遥感，辅修通信工程。GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34。曾获 2026 中国大学生计算机设计大赛省级一等奖、全国大学生数学竞赛三等奖、兰州大学优秀学生一等奖学金。具备扎实的 Python 开发、遥感图像处理、空间数据分析与信号系统基础，善于用代码与算法解决空间数据问题。
          </p>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>

          <section id="privacy" className="resume-section">
            <PrivacyLock />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
