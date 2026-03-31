import { BookOpen, Code2, Cpu, GraduationCap, Server, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'C / C++', icon: <Cpu size={20} /> },
    { name: 'Python', icon: <Terminal size={20} /> },
    { name: 'HTML & CSS', icon: <Code2 size={20} /> },
    { name: 'React', icon: <BookOpen size={20} /> },
    { name: '알고리즘', icon: <Server size={20} /> }
  ];

  return (
    <div className="page-enter-active" style={{ maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <GraduationCap size={36} color="var(--primary)" /> 
        About Me
      </h1>
      
      <div className="glass-card" style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--primary)' }}>안녕하세요! 컴퓨터소프트웨어 신입생 최승재입니다. 👋</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-color)', marginBottom: '16px', lineHeight: '1.8' }}>
          저는 <b>공학3계열 컴퓨터소프트웨어 전공 신입생</b>입니다. <br/>
          컴퓨터가 어떻게 동작하는지, 코드로 어떻게 세상을 바꿀 수 있는지에 흥미를 느껴 소프트웨어의 길을 선택하게 되었습니다.
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-color)', lineHeight: '1.8' }}>
          아직 모르는 것이 많지만, 호기심을 바탕으로 매일 새로운 것을 배우고 기록하려고 노력합니다.
          기본기를 탄탄하게 다지며, 궁극적으로는 사람들에게 실질적인 도움을 주는 풀스택 개발자로 성장하고 싶습니다.
        </p>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: 'var(--primary)' }}>#</span> Current Skills & Interests
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
        {skills.map((skill, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            transition: 'border-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <span style={{ color: 'var(--primary)' }}>{skill.icon}</span>
            <span style={{ fontWeight: 500 }}>{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: 'var(--primary)' }}>#</span> Education
      </h2>
      <div className="glass-card" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>대학교</h3>
            <div style={{ color: 'var(--text-muted)' }}>공학3계열 - 컴퓨터소프트웨어 맵(Map)</div>
          </div>
          <div style={{ backgroundColor: 'rgba(88, 166, 255, 0.1)', color: 'var(--primary)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 500 }}>
            현재 재학 중
          </div>
        </div>
      </div>
    </div>
  );
}
