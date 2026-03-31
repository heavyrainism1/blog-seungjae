import { useState } from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [filter, setFilter] = useState('All');

  const posts = [
    {
      id: 1,
      title: 'React와 Vite로 나만의 기술 블로그 구축하기',
      date: '2026-03-31',
      readTime: '5 min read',
      category: 'Web',
      excerpt: '공학3계열 신입생의 첫 프로젝트! Vercel과 여러가지 최신 기술 스택을 활용하여 블로그를 직접 만들어 본 후기를 공유합니다.',
      tags: ['React', 'Vite', 'Blog']
    },
    {
      id: 2,
      title: 'C언어 포인터(Pointer) 완벽하게 이해하기',
      date: '2026-03-25',
      readTime: '10 min read',
      category: 'C/C++',
      excerpt: '대학교 1학년 전공 수업에서 가장 큰 고비라고 불리는 C언어 포인터의 개념과 구조체 포인터 활용법을 시각적으로 정리했습니다.',
      tags: ['C', 'CS', 'Pointer']
    },
    {
      id: 3,
      title: '자료구조 기본: 스택(Stack)과 큐(Queue)',
      date: '2026-03-18',
      readTime: '7 min read',
      category: 'CS 기초',
      excerpt: 'LIFO와 FIFO 개념부터 파이썬과 C++에서의 실제 구현 방식 및 알고리즘 문제에 적용하는 팁을 다룹니다.',
      tags: ['Data Structure', 'Algorithm']
    },
    {
      id: 4,
      title: '깃(Git) 브랜치 전략과 충돌 해결 방법',
      date: '2026-03-10',
      readTime: '8 min read',
      category: 'Tool',
      excerpt: '팀 프로젝트를 시작하기 전에 꼭 알아야 할 Git Flow 및 협업 과정에서 필연적으로 발생하는 Merge Conflict 대처법.',
      tags: ['Git', 'Collaboration']
    }
  ];

  const filteredPosts = filter === 'All' ? posts : posts.filter(post => post.category === filter);
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

  return (
    <div className="page-enter-active" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Posts</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
        배우고 기록하고 성장하는 공간입니다. 총 {posts.length}개의 포스트가 있습니다.
      </p>

      {/* Filter Chips */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid',
              borderColor: filter === category ? 'var(--primary)' : 'var(--border-color)',
              backgroundColor: filter === category ? 'rgba(88, 166, 255, 0.1)' : 'var(--card-bg)',
              color: filter === category ? 'var(--primary)' : 'var(--text-color)',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {filteredPosts.map(post => (
          <article key={post.id} className="glass-card" style={{ padding: '24px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {post.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {post.readTime}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 600 }}><Tag size={14} /> {post.category}</span>
            </div>
            
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>
              <Link to={`/posts`} style={{ color: 'var(--text-color)' }}>{post.title}</Link>
            </h2>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>
            
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.8rem', 
                  backgroundColor: 'var(--bg-color)', 
                  padding: '4px 10px', 
                  borderRadius: '6px',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)'
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
