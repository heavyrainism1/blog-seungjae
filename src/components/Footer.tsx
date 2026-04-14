import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#edf4fd] w-full mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <div className="font-bold text-[#151d22]">ENGINEER_JOURNAL</div>
          <p className="font-mono uppercase text-[10px] tracking-[0.05em] text-[#151d22]/40">
            © 2024 Architecturalist Engineering Journal. Built with precision.
          </p>
        </div>
        <div className="flex gap-8">
          <Link to="#" className="font-mono uppercase text-[10px] tracking-[0.05em] text-[#151d22]/40 hover:text-[#0060aa] transition-colors">Privacy</Link>
          <Link to="#" className="font-mono uppercase text-[10px] tracking-[0.05em] text-[#151d22]/40 hover:text-[#0060aa] transition-colors">Changelog</Link>
          <Link to="#" className="font-mono uppercase text-[10px] tracking-[0.05em] text-[#151d22]/40 hover:text-[#0060aa] transition-colors">Colophon</Link>
          <Link to="#" className="font-mono uppercase text-[10px] tracking-[0.05em] text-[#151d22]/40 hover:text-[#0060aa] transition-colors">RSS</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
