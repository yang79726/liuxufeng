import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: "联系刘旭峰 - 兰州大学地理信息科学专业",
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">联系方式</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">欢迎学术交流与项目合作</p>
          </div>

          <div className="contact-divider">
            <span>或通过以下平台找到我</span>
          </div>

          <ContactIcons />
        </div>
      </section>
    </PageWrapper>
  );
}
