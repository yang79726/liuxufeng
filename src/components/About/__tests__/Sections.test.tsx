import { render, screen, waitFor, within } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '@/data/about';
import AboutContent from '../Sections';

describe('AboutContent', () => {
  it('renders intro copy without an Intro heading', () => {
    render(
      <AboutContent
        markdown={`# Intro

Hello from the intro.

# Some History

- Built a thing.`}
      />,
    );

    expect(screen.getByText('Hello from the intro.')).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Intro' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Some History' }),
    ).toBeInTheDocument();
  });

  it('assigns section variants for compact and links sections', () => {
    const { container } = render(
      <AboutContent
        markdown={`# Intro

Lead paragraph.

# I Like

- Running

# Websites from People I Admire

- [Example](https://example.com)`}
      />,
    );

    const sections = container.querySelectorAll('.about-section');

    expect(sections).toHaveLength(2);
    expect(sections[0]).toHaveClass('about-section--compact');
    expect(sections[1]).toHaveClass('about-section--links');
  });

  it('adds stable heading ids for deep links', () => {
    render(
      <AboutContent
        markdown={`# Intro

Lead paragraph.

# Some History

- Built a thing.

# Travel / Geography

- Went somewhere.`}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Some History' }),
    ).toHaveAttribute('id', 'some-history');
    expect(
      screen.getByRole('heading', { name: 'Travel / Geography' }),
    ).toHaveAttribute('id', 'travel-geography');
  });

  it('renders section navigation and self-links for the real about markdown', () => {
    render(<AboutContent markdown={aboutMarkdown} />);
    const nav = screen.getByRole('navigation', { name: 'About sections' });

    expect(within(nav).getAllByRole('link').length).toBeGreaterThan(0);
    expect(
      within(nav).getByRole('link', { name: 'Some History' }),
    ).toHaveAttribute('href', '#some-history');
  });

  it('renders matching hash links and heading ids into static markup', () => {
    const html = renderToStaticMarkup(
      <AboutContent markdown={aboutMarkdown} />,
    );

    expect(html).toContain('href="#some-history"');
    expect(html).toContain('id="some-history"');
  });

  it('supports same-page hash navigation from section links', async () => {
    window.history.replaceState({}, '', '/about/');

    render(<AboutContent markdown={aboutMarkdown} />);

    const nav = screen.getByRole('navigation', { name: 'About sections' });
    const navLink = within(nav).getByRole('link', {
      name: 'Some History',
    });

    navLink.click();

    await waitFor(() => {
      expect(window.location.hash).toBe('#some-history');
    });
    expect(document.querySelector(window.location.hash)).toHaveTextContent(
      'Some History',
    );
  });
});
