import React from 'react';

export default function Posts() {
  return (
    <div className="pt-48 pb-32">
      {/* Hero Context */}
      <header className="max-w-7xl mx-auto px-12 mb-32">
        <div className="max-w-3xl">
          <div className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">Current Edition / Vol. 04</div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-12 text-on-surface">
            Thoughts on <br/>Structural <br/>Integrity.
          </h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-xl">
            An exploration of digital architecture, system entropy, and the discipline of building software that outlasts its creators.
          </p>
        </div>
      </header>

      {/* Minimal Typography-Focused Blog List */}
      <section className="max-w-7xl mx-auto px-12">
        <div className="space-y-32">
          {/* Journal Entry 01 */}
          <article className="group max-w-4xl cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
              <div className="w-32 pt-2">
                <span className="font-mono text-xs text-outline tracking-widest uppercase">Aug 24, 2024</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-label text-[10px] uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">Infrastructure</span>
                  <span className="font-mono text-[10px] text-outline">08 min read</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                    The Fallacy of Microservices in Small Engineering Teams.
                </h2>
                <p className="text-lg text-on-surface-variant/80 font-light leading-relaxed mb-8 max-w-2xl">
                    Complexity is often mistaken for scalability. We examine why distributed monoliths are the silent killer of productivity for teams under fifty and how to return to the elegance of the modular monolith.
                </p>
                <div className="flex items-center text-primary font-label text-sm tracking-widest uppercase group-hover:gap-2 transition-all">
                    Read Full Entry
                    <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                </div>
              </div>
            </div>
          </article>
          
          {/* Journal Entry 02 */}
          <article className="group max-w-4xl cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
              <div className="w-32 pt-2">
                <span className="font-mono text-xs text-outline tracking-widest uppercase">Aug 18, 2024</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-label text-[10px] uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">Architecture</span>
                  <span className="font-mono text-[10px] text-outline">12 min read</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Designing for Failure: The Idempotency Key Pattern.
                </h2>
                <p className="text-lg text-on-surface-variant/80 font-light leading-relaxed mb-8 max-w-2xl">
                    In a world of unreliable networks, consistency is the only currency that matters. A deep dive into implementing robust state transitions across distributed systems using deterministic identifiers.
                </p>
                <div className="flex items-center text-primary font-label text-sm tracking-widest uppercase group-hover:gap-2 transition-all">
                    Read Full Entry
                    <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                </div>
              </div>
            </div>
          </article>

          {/* Journal Entry 03 */}
          <article className="group max-w-4xl cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
              <div className="w-32 pt-2">
                <span className="font-mono text-xs text-outline tracking-widest uppercase">Jul 30, 2024</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-label text-[10px] uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">Philosophy</span>
                  <span className="font-mono text-[10px] text-outline">05 min read</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                    The Brutalist Manifesto for Modern UI.
                </h2>
                <p className="text-lg text-on-surface-variant/80 font-light leading-relaxed mb-8 max-w-2xl">
                    Stripping away the excess. Why the most successful interfaces are those that respect the user's cognitive load over the designer's desire for ornamentation. Lessons from 20th-century architecture.
                </p>
                <div className="flex items-center text-primary font-label text-sm tracking-widest uppercase group-hover:gap-2 transition-all">
                    Read Full Entry
                    <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                </div>
              </div>
            </div>
          </article>

          {/* Journal Entry 04 */}
          <article className="group max-w-4xl cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
              <div className="w-32 pt-2">
                <span className="font-mono text-xs text-outline tracking-widest uppercase">Jul 12, 2024</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-label text-[10px] uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full text-on-surface-variant">Database</span>
                  <span className="font-mono text-[10px] text-outline">15 min read</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                    Beyond the Index: Understanding LSM-Trees.
                </h2>
                <p className="text-lg text-on-surface-variant/80 font-light leading-relaxed mb-8 max-w-2xl">
                    Log-Structured Merge-Trees power the fastest databases on the planet. We break down the mechanics of sstable compaction, bloom filters, and the trade-offs of write-heavy workloads.
                </p>
                <div className="flex items-center text-primary font-label text-sm tracking-widest uppercase group-hover:gap-2 transition-all">
                    Read Full Entry
                    <span className="material-symbols-outlined ml-2 text-sm" data-icon="arrow_forward">arrow_forward</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Pagination */}
        <div className="mt-48 flex justify-between items-center border-t border-outline-variant/20 pt-16">
          <div className="font-mono text-[10px] text-outline uppercase tracking-widest">Page 01 / 14</div>
          <div className="flex gap-12">
            <button className="flex items-center font-label text-xs uppercase tracking-widest text-on-surface-variant/40 cursor-not-allowed">
              <span className="material-symbols-outlined mr-2 text-sm" data-icon="keyboard_arrow_left">keyboard_arrow_left</span>
              Previous
            </button>
            <button className="flex items-center font-label text-xs uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
              Next Edition
              <span className="material-symbols-outlined ml-2 text-sm" data-icon="keyboard_arrow_right">keyboard_arrow_right</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
