import { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const POSTS_PER_PAGE = 8;

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="pt-48 pb-32">
      {/* Hero Context */}
      <header className="max-w-7xl mx-auto px-12 mb-32">
        <div className="max-w-3xl">
          <div className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">Current Edition / Vol. 04</div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-12 text-on-surface">
            Journal of <br/>Engineering <br/>Excellence.
          </h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-xl">
            An exploration of digital architecture, system entropy, and the discipline of building software that outlasts its creators.
          </p>
        </div>
      </header>

      {/* Minimal Typography-Focused Blog List */}
      <section className="max-w-7xl mx-auto px-12">
        <div className="space-y-32">
          {currentPosts.map((post) => (
            <article key={post.id} className="group max-w-4xl cursor-pointer">
              <Link to={`/posts/${post.id}`} className="block">
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
                  <div className="w-32 pt-2">
                    <span className="font-mono text-xs text-outline tracking-widest uppercase">{post.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-label text-[10px] uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">{post.category}</span>
                      <span className="font-mono text-[10px] text-outline">{post.readTime}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {post.title}
                    </h2>
                    <p className="text-lg text-on-surface-variant/80 font-light leading-relaxed mb-8 max-w-2xl">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-label text-sm tracking-widest uppercase group-hover:gap-2 transition-all">
                        Read Full Entry
                        <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-48 flex justify-between items-center border-t border-outline-variant/20 pt-16">
          <div className="font-mono text-[10px] text-outline uppercase tracking-widest">
            Page {currentPage.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
          </div>
          <div className="flex gap-12">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className={`flex items-center font-label text-xs uppercase tracking-widest ${currentPage === 1 ? 'text-on-surface-variant/40 cursor-not-allowed' : 'text-on-surface hover:text-primary transition-colors'}`}
            >
              <span className="material-symbols-outlined mr-2 text-sm" data-icon="keyboard_arrow_left">keyboard_arrow_left</span>
              Previous
            </button>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className={`flex items-center font-label text-xs uppercase tracking-widest ${currentPage === totalPages ? 'text-on-surface-variant/40 cursor-not-allowed' : 'text-on-surface hover:text-primary transition-colors'}`}
            >
              Next Edition
              <span className="material-symbols-outlined ml-2 text-sm" data-icon="keyboard_arrow_right">keyboard_arrow_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
