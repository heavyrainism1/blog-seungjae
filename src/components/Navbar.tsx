import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6faff]/70 backdrop-blur-xl transition-all duration-200 ease-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-12 py-6">
        <Link to="/" className="font-mono font-bold tracking-tighter text-[#151d22]">
          ENGINEER_JOURNAL
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/posts" className="text-[#0060aa] font-medium border-b-2 border-[#0060aa] pb-1 font-['Inter'] font-light tracking-tight transition-opacity hover:opacity-80">Articles</Link>
          <Link to="/series" className="text-[#151d22]/60 hover:text-[#151d22] transition-colors font-['Inter'] font-light tracking-tight hover:opacity-80">Series</Link>
          <Link to="/about" className="text-[#151d22]/60 hover:text-[#151d22] transition-colors font-['Inter'] font-light tracking-tight hover:opacity-80">Manifesto</Link>
          <Link to="#" className="text-[#151d22]/60 hover:text-[#151d22] transition-colors font-['Inter'] font-light tracking-tight hover:opacity-80">Archive</Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm font-label placeholder:text-outline/50 w-32 outline-none" placeholder="Search entries..." type="text"/>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-xl font-label text-sm font-bold tracking-wide shadow-lg shadow-primary/10 hover:opacity-80 transition-opacity">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
