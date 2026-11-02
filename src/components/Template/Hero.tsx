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
          <span className="hero-name">刘旭峰</span>
        </h1>

        <p className="hero-tagline">
          兰州大学 · 地理信息科学（主修） · 通信工程（辅修）
          <br />
          GPA: 4.04 / 5.0 (均分 90.40) | 排名: 2/34
          <br />
          遥感与GIS · 空间数据分析 · 编程与算法开发
        </p>

        <div className="hero-chips">
          <span className="hero-chip">主修 GIS 与遥感</span>
          <span className="hero-chip">辅修通信工程</span>
          <span className="hero-chip">计算机设计大赛省一等奖</span>
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
