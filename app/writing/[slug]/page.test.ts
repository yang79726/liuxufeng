import { describe, expect, it, vi } from 'vitest';

import * as posts from '@/lib/posts';
import { SITE_URL } from '@/lib/utils';
import { generateMetadata } from './page';

describe('writing post metadata', () => {
  it('uses a trailing-slash canonical URL for posts', async () => {
    vi.spyOn(posts, 'getPostBySlug').mockReturnValue({
      slug: 'sample-post',
      title: 'Sample Post',
      date: '2026-01-01',
      description: 'A sample post',
      content: 'Sample content',
    });

    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'sample-post' }),
    });

    expect(metadata.openGraph?.url).toBe(
      `${SITE_URL}/writing/sample-post/`,
    );
  });
});
