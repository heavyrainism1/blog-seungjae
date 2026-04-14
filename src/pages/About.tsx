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
    <div className="pt-32 pb-32 max-w-3xl mx-auto w-full px-12">
      <h1 className="text-[2.5rem] font-bold mb-6 flex items-center gap-3 text-on-surface">
        <GraduationCap size={36} className="text-primary" /> 
        About Me
      </h1>
      
      <div className="bg-surface-container/50 backdrop-blur-md rounded-xl p-8 shadow-sm border border-outline-variant/20 mb-10">
        <h2 className="text-[1.3rem] font-bold mb-4 text-primary">안녕하세요! 컴퓨터소프트웨어 신입생 최승재입니다. 👋</h2>
        <p className="text-[1.05rem] text-on-surface-variant mb-4 leading-relaxed">
          저는 <b>공학3계열 컴퓨터소프트웨어 전공 신입생</b>입니다. <br/>
          컴퓨터가 어떻게 동작하는지, 코드로 어떻게 세상을 바꿀 수 있는지에 흥미를 느껴 소프트웨어의 길을 선택하게 되었습니다.
        </p>
        <p className="text-[1.05rem] text-on-surface-variant leading-relaxed">
          아직 모르는 것이 많지만, 호기심을 바탕으로 매일 새로운 것을 배우고 기록하려고 노력합니다.
          기본기를 탄탄하게 다지며, 궁극적으로는 사람들에게 실질적인 도움을 주는 풀스택 개발자로 성장하고 싶습니다.
        </p>
      </div>

      <h2 className="text-[1.5rem] font-bold mb-5 flex items-center gap-2 text-on-surface">
        <span className="text-primary">#</span> Current Skills & Interests
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 mb-10">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg transition-colors hover:border-primary group">
            <span className="text-primary">{skill.icon}</span>
            <span className="font-medium text-on-surface group-hover:text-primary transition-colors">{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-[1.5rem] font-bold mb-5 flex items-center gap-2 text-on-surface">
        <span className="text-primary">#</span> Education
      </h2>
      <div className="bg-surface-container/50 backdrop-blur-md rounded-xl p-6 shadow-sm border border-outline-variant/20">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h3 className="text-[1.1rem] font-bold mb-1 text-on-surface">대학교</h3>
            <div className="text-on-surface-variant text-sm">공학3계열 - 컴퓨터소프트웨어 맵(Map)</div>
          </div>
          <div className="bg-primary-container/20 text-primary px-3 py-1 rounded-full text-[0.85rem] font-medium">
            현재 재학 중
          </div>
        </div>
      </div>
    </div>
  );
}
