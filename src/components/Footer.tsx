import { Code2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      padding: '40px 0',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} 최승재 Portfolio.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
            Built with React & Vite. 공학3계열 컴퓨터소프트웨어 신입생.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="GitHub">
            <Code2 size={20} color="var(--text-muted)" />
          </a>
          <a href="mailto:hello@example.com" className="nav-link" aria-label="Email">
            <Mail size={20} color="var(--text-muted)" />
          </a>
        </div>
      </div>
    </footer>
  );
}
