import { NavLink, Link } from 'react-router-dom';
import { Terminal, Code, User, FileText } from 'lucide-react';

export default function Navbar() {
  const activeStyle = {
    color: 'var(--primary)',
    textShadow: '0 0 8px var(--primary-glow)',
    borderBottom: '2px solid var(--primary)'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 0',
    fontWeight: 500,
    letterSpacing: '0.5px'
  };

  return (
    <nav style={{ 
      borderBottom: '1px solid var(--border-color)', 
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(13, 17, 23, 0.8)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}>
          <Terminal size={24} color="var(--primary)" />
          <span className="terminal-text">Seungjae_<span style={{ animation: 'blink 1s step-end infinite' }}>|</span></span>
        </Link>
        <div style={{ display: 'flex', gap: '24px' }}>
          <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle} className="nav-link">
            <Code size={18} /> Home
          </NavLink>
          <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle} className="nav-link">
            <User size={18} /> About
          </NavLink>
          <NavLink to="/posts" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle} className="nav-link">
            <FileText size={18} /> Posts
          </NavLink>
        </div>
      </div>
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </nav>
  );
}
