import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">刘旭峰 </span>
        </h1>

        <p className="hero-tagline">
          兰州大学 · 地理信息科学（主修） · 通信工程（辅修）
          <br />
          GPA 90.32/100
          <br />
          遥感与GIS · 信号处理 · 编程开发python
        </p>

        <div className="hero-chips">
          <span className="hero-chip">主修GIS与遥感</span>
          <span className="hero-chip">辅修通信工程</span>
          <span className="hero-chip">兰州大学本科生</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
