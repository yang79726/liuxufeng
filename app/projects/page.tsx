import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: '项目经历',
  description: "遥感与GIS · 数据分析 · 开源项目",
  path: '/projects/',
});

export default function ProjectsPage() {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">项目经历</h1>
          <p className="page-subtitle">
            遥感图像处理 · GIS空间分析 · Python开发
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">核心项目</h2>
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">其他实践</h2>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}