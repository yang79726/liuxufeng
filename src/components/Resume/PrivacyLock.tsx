'use client';

import { useState } from 'react';

export default function PrivacyLock() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Default privacy passcode: 2027 (user graduation year) or lzu
    if (password.trim() === '2027' || password.trim().toLowerCase() === 'lzu') {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        marginTop: '32px',
        padding: '20px 24px',
        borderRadius: '12px',
        border: '1px solid var(--color-border, #e2e8f0)',
        background: 'var(--color-bg-secondary, #f8fafc)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.25rem' }}>{unlocked ? '🔓' : '🛡️'}</span>
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
          网络安全与个人隐私保护声明
        </h3>
      </div>

      <p
        style={{
          margin: '12px 0',
          fontSize: '0.92rem',
          color: 'var(--color-text-secondary, #64748b)',
          lineHeight: 1.6,
        }}
      >
        本站遵循网络安全规范与个人信息保护原则，所有展示内容已完成严格隐私脱敏：
        <strong>不包含个人身份证号、联系电话、学籍号等敏感凭证</strong>。
        如需获取进一步详细材料或开展学术/技术交流，可通过官方校园邮箱进行可信核验。
      </p>

      {!unlocked ? (
        <form
          onSubmit={handleVerify}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '10px',
            marginTop: '12px',
          }}
        >
          <input
            type="password"
            placeholder="输入访问通行码 (默认: 2027)"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(false);
            }}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: error
                ? '1px solid #ef4444'
                : '1px solid var(--color-border, #cbd5e1)',
              background: 'var(--color-bg-primary, #ffffff)',
              fontSize: '0.88rem',
            }}
          />
          <button
            type="submit"
            className="button button-primary"
            style={{ padding: '6px 16px', fontSize: '0.88rem' }}
          >
            安全验证解锁
          </button>
          {error && (
            <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>
              通行码错误，请尝试默认码 2027
            </span>
          )}
        </form>
      ) : (
        <div
          style={{
            marginTop: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
          }}
        >
          <span
            style={{ color: '#065f46', fontSize: '0.9rem', fontWeight: 500 }}
          >
            ✅
            安全验证已通过：身份信息已加密校验。如需验证官方在读及排名原件，请联系{' '}
            <a
              href="mailto:liuxf2023@lzu.edu.cn"
              style={{ color: '#059669', textDecoration: 'underline' }}
            >
              liuxf2023@lzu.edu.cn
            </a>
            。
          </span>
        </div>
      )}
    </div>
  );
}
