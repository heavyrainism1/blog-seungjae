import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-enter-active" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      {/* Hero Section */}
      <section style={{ 
        padding: '60px 0', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'rgba(88, 166, 255, 0.1)',
          border: '1px solid var(--primary)',
          borderRadius: '20px',
          color: 'var(--primary)',
          marginBottom: '24px',
          fontSize: '0.9rem',
          fontWeight: 500
        }}>
          <Terminal size={16} /> Hello, World!
        </div>
        <h1 style={{ 
          fontSize: '2.8rem', 
          margin: '0 0 20px 0',
          background: 'linear-gradient(to right, var(--text-color), var(--primary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2'
        }}>
          미래를 코딩하는 최승재,<br />환영합니다.
        </h1>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.1rem', 
          maxWidth: '600px', 
          margin: '0 auto 30px auto'
        }}>
          <b>공학3계열 컴퓨터소프트웨어 전공.</b><br/>배운 것을 꼼꼼히 기록하고, 멋진 개발자로 성장하는 과정을 공유합니다.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/about" className="btn-primary">
            내 소개 보기 <ArrowRight size={18} />
          </Link>
          <Link to="/posts" className="btn-primary" style={{
            backgroundColor: 'transparent',
            borderColor: 'var(--border-color)',
            color: 'var(--text-color)'
          }}>
            최근 게시물 살펴보기
          </Link>
        </div>
      </section>

      {/* Featured Posts Preview */}
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'var(--primary)' }}>#</span> 최근 관심사
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          <div className="glass-card">
            <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>C / C++</div>
            <h3 style={{ marginBottom: '12px' }}>프로그래밍 기초 다지기</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
              학교 수업에서 다루는 C언어 기초 문법과 메모리 구조, 그리고 C++ 객체지향에 대한 스터디 기록입니다.
            </p>
            <Link to="/posts" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Read more <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass-card">
            <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Web Frontend</div>
            <h3 style={{ marginBottom: '12px' }}>나만의 블로그 구축기</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
              React와 TypeScript, Vite를 활용하여 현재 이 블로그를 개발하게 된 과정과 사이버 펑크 블루 테마 적용 소감.
            </p>
            <Link to="/posts" style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              Read more <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
