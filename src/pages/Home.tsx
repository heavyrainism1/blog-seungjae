import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-32 pb-32 space-y-32 md:space-y-48">
      {/* ========== DECOUPLED SYSTEMS ========== */}
      <div className="max-w-7xl mx-auto px-12">

      {/* Featured Article: Asymmetric Layout */}
      <section className="grid grid-cols-12 gap-12 items-end mb-32">
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="clean high-angle shot of a silver laptop on a minimalist white desk with architectural blueprints and a glass of water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA98qeMSnjBGC5H2_1lQGq2XEQ6WWrDxOz37pZHMlr6U_Zf3OEdhQhIQuiKn9aJ8AACC16uUwbsd1UhczRYcCLT2tnZxcyJGZEN2CVHP0rpERpop3N_FkaaTP0N0_e0jgLWsyHSMPZkpv87ybVJiDHs0nCyCyxsRJoacnAagmt879ic1Y4vaSgezrceUxV_hesSvBtZ4FpKGizGp70gxcrVXqDSjsJfJj6A3_YtSPUO8D4mXDqDYNBCkrTSoEjIvORbomGaNslLfiw"/>
          </div>
          {/* Float Label */}
          <div className="absolute top-8 left-8 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/15">
            <span className="font-label text-[10px] font-bold tracking-[0.1em] text-primary uppercase">Featured Engineering</span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 pb-12">
          <div className="mb-4">
            <span className="font-label text-[12px] font-medium tracking-[0.05em] text-on-surface-variant uppercase">Volume 04 — Oct 2024</span>
          </div>
          <h1 className="text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-8 text-on-surface">
            The Architecture of Decoupled Systems.
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
            Exploring the structural integrity of micro-frontends and how intentional friction leads to more resilient digital infrastructure.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-primary"></div>
            <Link to="/posts" className="font-label text-sm font-bold tracking-wider text-primary group flex items-center gap-2">
              READ ARTICLE
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tonal Shift Spacer */}
      <div className="w-full h-[1px] bg-outline-variant/15 mb-32"></div>

      {/* Masonry-style Grid Section */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Deep-Dives</h2>
            <p className="text-on-surface-variant font-label text-xs uppercase tracking-[0.1em]">Selected writings on infrastructure & design</p>
          </div>
          <div className="flex gap-4">
            <span className="p-2 rounded-full border border-outline-variant/30 hover:bg-surface-container transition-colors cursor-pointer material-symbols-outlined">grid_view</span>
            <span className="p-2 rounded-full border border-outline-variant/30 hover:bg-surface-container transition-colors cursor-pointer material-symbols-outlined">reorder</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <article className="group cursor-pointer">
            <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300 group-hover:-translate-y-2">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" data-alt="abstract satellite view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDykxk7RCn7X9M5U_JQoIIRixgHCdYIB3yyrU0Htp8WgITucJyOOSzV6bNprpihGn3rhyomL7sKI4LBu0e1Tz8lSXrZ8Lg5z9ZWYQYmH_NNqpX7tPSmGKo9OXBkRL7rE7xiK8Ffd5-d8xCMDq_R2WPDQ5BmwkXxFClWumfmtAAePHFceiyrLnMtrL9GssZnD4Soo-tjO-i4i7CSa1wHHwA7NPg0dHyxahgg6kUyicOKPVwSd56oESC-qO-1MvG-McGkDH3IyTcdvB8"/>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-[9px] font-bold uppercase tracking-widest">CLOUD</span>
              <span className="text-on-surface-variant font-label text-[10px] self-center">8 MIN READ</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Serverless as a Blueprint: Rethinking Scalability</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">How managed infrastructure is shifting the paradigm from maintenance to pure architectural design.</p>
          </article>

          {/* Card 2 (Vertical Focus) */}
          <article className="group cursor-pointer lg:row-span-2">
            <div className="aspect-[3/4] mb-6 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300 group-hover:-translate-y-2">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" data-alt="circuit board traces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfHv-rzSll2PBFnTU0Lj46nwdPqtTeh4eiGIrn3PFQ93OpfXe5KOEddiMuKhuqFo_ge4hVb7wRY5-4lTyQ020drRdKox3OW5KAWpnNNUtrwpOcx8m2b-ExPwGFmVlY6vK8KJFpTOD0jEftYv92vL8ZosacbHCaFxOs1J1G6aCKi26bCiF8TEOo7zSK_lKZvyIzYpBfhHeeXNpfQUB5msB8nILbDyAJJCmoxTR7-hY9M63kEz_AJE0YpXM4gGjwAwF5NexQFNTygYs"/>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-[9px] font-bold uppercase tracking-widest">HARDWARE</span>
              <span className="text-on-surface-variant font-label text-[10px] self-center">15 MIN READ</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">The Silicon Soul: Hardware-Software Co-Design in 2024</h3>
            <p className="text-on-surface-variant text-base leading-relaxed mb-6">Bridging the gap between physical constraints and digital abstractions for peak performance.</p>
            <div className="pt-4 border-t border-outline-variant/10">
              <p className="text-xs font-mono text-on-surface-variant">PUBLISHED IN: HARDWARE_SERIES</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="group cursor-pointer">
            <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300 group-hover:-translate-y-2">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" data-alt="3D cubes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnWkNEm3p8itLxWbf-QcjRaTzdpWHehktFetkZ617--zMTK3hxcRXgAUSiOSGymropFe8MLKggDrEDDnmlPvxtywM40VWHhR1ENgU7ATi1p3UZ297gVpTwT4DRJaMt1m54fnzKf2jOY9wQLXp8TXRAHHsjWIFL9S1vX3suHPe-qGHlFSY3LydqoH7qymjfVdyxgruyloYBXovxd5N_Xqr5IOYiJiJNQmm2sM1DbVojOkrH3TujoJZOpyoaNOZfED0-V_ijwO9PicU"/>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-[9px] font-bold uppercase tracking-widest">DESIGN</span>
              <span className="text-on-surface-variant font-label text-[10px] self-center">6 MIN READ</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Visual Variables: The Math Behind Motion Design</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Understanding easing curves and physics engines to create natural user interactions.</p>
          </article>

          {/* Card 4 */}
          <article className="group cursor-pointer lg:col-start-1">
            <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300 group-hover:-translate-y-2">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" data-alt="forest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0QOp6-2sTVxQCKfRPMGtZ7fVmcKRPvlgTRC62--Re1Mq-td5i2TkgZZiXoyK9NYdIISPpkM9cJHRwB9l7bH0Z_8muSdBFYmosDd2JHGOPcZP3oXe51_cH7Ak4JO4sFFr0nI6AWMBdXK6objnem4RY-V2CkBwzJ0CXLkrGuMs8MuKk2BShxudveDCH1FUM6jeQM5XVv6Z1BfY9Sye126gUK-eanWLta9gkVAi_WOiJ3MraxuLrfBNrOkBLWJQ0FHoEZuhs1hzsakE"/>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-[9px] font-bold uppercase tracking-widest">CULTURE</span>
              <span className="text-on-surface-variant font-label text-[10px] self-center">12 MIN READ</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">The Solitude of Seniority: Leading Without Directing</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Navigating the transition from individual contributor to technical strategist.</p>
          </article>

          {/* Card 5 */}
          <article className="group cursor-pointer lg:col-start-3">
            <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container-low transition-all duration-300 group-hover:-translate-y-2">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" data-alt="code screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwwbQakqD9Psb-1p-8YCs65fg-vCMwseX59bJiwzfp3pqj9t4Nvz6vFZphQF5dFiOG_4yl9bKJj2flEg4mfZcmCkuN5Sjk2vX4y3uAQYtyRMjUkytwQwcx3r-Ks8Zj3Q1iQ6kdWPrJDgqY2G1Jko3cDTD13OkRGyiDyU4AfZ3m4JgV8wHnVXMmGF2ocgAHefcIFUvCRsJCt6fAKpCgvLR4VIFP7cMqmLxa_PEAA-azzT_MhiHEBhpD-IGx8zLMIX4UBJaG8puDeA"/>
            </div>
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-[9px] font-bold uppercase tracking-widest">SYSTEMS</span>
              <span className="text-on-surface-variant font-label text-[10px] self-center">10 MIN READ</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Atomic State: Managing Shared Data at Scale</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">A survey of modern state management patterns and the entropy they attempt to solve.</p>
          </article>
        </div>
      </section>

      {/* Newsletter Tonal Shift Box */}
      <section className="bg-surface-container-low rounded-xl p-16 mb-32 flex flex-col items-center text-center">
        <span className="font-label text-xs font-bold tracking-[0.2em] text-primary mb-6 uppercase">Stay Precise</span>
        <h2 className="text-4xl font-bold mb-6 max-w-xl leading-tight">Weekly insights for the architectural engineer.</h2>
        <p className="text-on-surface-variant max-w-md mb-10">Curated articles on distributed systems, interface philosophy, and high-performance engineering.</p>
        <form className="flex w-full max-w-md gap-4" onSubmit={(e) => e.preventDefault()}>
          <input className="flex-grow bg-surface-container-lowest border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary font-label text-sm outline-none" placeholder="Your engineering email" type="email"/>
          <button type="submit" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label text-sm font-bold uppercase tracking-widest hover:opacity-90">Join</button>
        </form>
      </section>
      </div>
      
      <div className="max-w-7xl mx-auto px-12">
          <div className="w-full h-[1px] bg-outline-variant/30"></div>
      </div>
      
      {/* ========== STRUCTURAL INTEGRITY ========== */}
      <div>

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

      <div className="max-w-7xl mx-auto px-12">
          <div className="w-full h-[1px] bg-outline-variant/30"></div>
      </div>
      
      {/* ========== SYSTEMS THINKING ========== */}
      <div className="max-w-7xl mx-auto px-12">

      {/* Hero Section */}
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="font-label text-xs font-bold text-primary tracking-[0.2em] uppercase mb-4">The Repository</div>
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none text-on-surface">
            Systems <br/> Thinking.
          </h1>
          <p className="mt-8 text-xl text-on-surface-variant font-light leading-relaxed">
            A collection of technical deep-dives into distributed systems, performance engineering, and the philosophy of software architecture.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-32 h-32 rounded-xl bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover" data-alt="Close-up of organized server rack cables in a clean data center with blue and white lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe7QuWKccVNZXvEzF7hmQwIexX_kpvBKqYznJcZgcrljkXUa5Xx2ehKHqQ7IezaAmorD2QwQmVpvOQz6v_NUkyuJ85H8ydeCs_oKmUEvaPP6TopTYjfkBMey4U8N5WCo33sVvhSxZLg9RAo9-h7oWykYjbXTa2dYAUqPX6M43ihykNTwTecmSeN7b6ZcjNd-bSLmJayjKepNFN9L86xHq7dtPQsHGNdvKkz7pUh9zFqz8c1WN_A8baby4Vni5_m1QgArz7Wwqma3c"/>
          </div>
          <div className="w-32 h-32 rounded-xl bg-surface-container-high overflow-hidden">
            <img className="w-full h-full object-cover" data-alt="Abstract geometric architectural concrete structure with sharp shadows and clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOPEbmEWMVyPcZO2XQ_fV7L7FCFoFwrHatrKZbjSqJYlwERrQyfOUiD1XLro7iAsT8XlNwACzvMxIYbV_c30mrj1POXykLXVWsphbwSHimLYylAxTBmZ3STCLkm3FKqASp7We_yGagayZ_MhTSUzvrn_BRWxAnOpwTSWBsm0zDP8w3QL3qVVdZqgcAPP61dYa_ua0Q3BT59_N73xwk-rvOvxBc2m8htqY52cBIVfijt5Cx-7MKVU65flKlzf0NWiVRzG9i-l532k8"/>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Technical Blog Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Article Card 1 */}
            <article className="group cursor-pointer">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A futuristic digital representation of a neural network grid with glowing nodes and cyan lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoUgvZ6iD2lRQAkd38EhBCumtbUV-MA2iK59ptMC1HRNfsLXsq4E0vrUrSNOGhohaU881ZjyGh9zKARZfyBw3JDgENsAvhxhZLjXb6GqgrSKmyd3Q0wddtOcr5vONCaXAO23zjyBwN-MEIZvBXExvT5Rz_-qHwVy6SNTOMHiViVAynhbdoDdXtjPrN9O8BDjKiSzJXebM_bakFrDC1x5S7rtXeK8wrlNjTmCNvrzV5j2G5tmDRpU6cr7-yhh1CUyEHTxCox0Rl4xQ"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold">Distributed</span>
                <span className="font-mono text-[10px] text-outline italic">12 MIN READ</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors">Understanding Paxos and Raft: A Comparative Study</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                Consensus algorithms are the backbone of distributed systems. We explore why Raft gained popularity over the classic Paxos implementation in modern cloud environments.
              </p>
            </article>

            {/* Article Card 2 */}
            <article className="group cursor-pointer">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Sleek modern server room with glowing blue status indicators and reflection on polished floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH2Trkr3rZ8RRQyq1FsuoPRlFl7Dn-SkeujaBvnbnWKfqJzsvNQPuZMZcmw_sH0S7OcPXSq1V09Oxb2i5o5d6yikwX9gdwk0EZwY7ti-Ero0Odj3FU911BCiSor73Hn1HtJrQbvMJddUi-zMs3PAiC1L286uwXxboGYGXENPkGG7My2dIHyLR7puTipiAp5ZvjTrEMg4HlCPqn3VVJjJ8kxncohU3xO4LbIM8QerzbZwWbUDKyEaMcal795c9MoSumTD7Ez-mZNsM"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold">Performance</span>
                <span className="font-mono text-[10px] text-outline italic">08 MIN READ</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors">Optimizing L3 Cache Locality in Rust</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                Hardware-aware programming is no longer optional for high-performance applications. Learn how to structure data for maximum CPU cache efficiency.
              </p>
            </article>

            {/* Article Card 3 */}
            <article className="group cursor-pointer">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Satellite view of Earth at night with illuminated fiber optic global network connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdBC4MDiT88f1dmgM3oudlvFee8eV74fsqt9g9VI_MiJxoR0YmT7JvBt7jzCuRjRavhKx_N4MXtmT19AFEFmqG_xR2eit3PXuPPC2Vq4V-msxF8-OjKcHUYbM51r7LQw1ETTzSH734izb53-LuQrVeFyaII2u7Nuv7iPMUQu5gv2OWQWQJJsFKOADaNBvhHuKg4fXhs6KDOFOF7woSp_HprZ6ATX41CaKjy3mgzJJGBva3fEoSr3kAQUSl1wy6z7XGMkscX32DoOM"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold">Architecture</span>
                <span className="font-mono text-[10px] text-outline italic">15 MIN READ</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors">The Microservices Fallacy</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                When does the operational overhead of microservices outweigh the scalability benefits? An honest look at modular monoliths in 2024.
              </p>
            </article>

            {/* Article Card 4 */}
            <article className="group cursor-pointer">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Minimalist abstract code displayed on a high-resolution monitor with soft focus background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxEUb6fDQid-9BXSdAToVRoa-TnVR9hUM5N9SeywGpOGDC8dNt6jYDAkLLR7hhBRSAVLaknVkXpm3xXY4_7HwYgJmxfpANiW-fqUioqTkVZtk0FWu-kFURVVoLFhhqL3IfmYPrekca9QMTb3mAQ-6p4i726s4CW_URvr5D-8GoLXKFgrA9gyXfWwRbtC9Q8g0MhMbyA5mhIqYe_vRTfPfyaR3O94QJt5ZK54J2THoM3g_qZWaC1vqAsc7nOI2UUeSb8UYhH6cFKTs"/>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold">Tooling</span>
                <span className="font-mono text-[10px] text-outline italic">05 MIN READ</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors">Building Custom eBPF Observability Tools</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                Peering into the kernel without modifying source code. A hands-on guide to using eBPF for real-time production debugging.
              </p>
            </article>
          </div>
          
          <div className="mt-20 pt-12 border-t border-outline-variant/10 text-center">
            <button className="font-label text-xs font-bold uppercase tracking-[0.2em] text-on-surface hover:text-primary transition-colors inline-flex items-center gap-2 group">
              Load Older Archives
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-16">
          {/* Categories */}
          <div>
            <h4 className="font-label text-xs font-bold text-outline uppercase tracking-widest mb-8">Taxonomy</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-sm font-headline font-medium text-on-surface group-hover:text-primary transition-colors">Distributed Systems</span>
                <span className="font-mono text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">24</span>
              </li>
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-sm font-headline font-medium text-on-surface group-hover:text-primary transition-colors">System Design</span>
                <span className="font-mono text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">18</span>
              </li>
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-sm font-headline font-medium text-on-surface group-hover:text-primary transition-colors">Kernel Engineering</span>
                <span className="font-mono text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">07</span>
              </li>
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-sm font-headline font-medium text-on-surface group-hover:text-primary transition-colors">Performance Tuning</span>
                <span className="font-mono text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">12</span>
              </li>
              <li className="flex justify-between items-center group cursor-pointer">
                <span className="text-sm font-headline font-medium text-on-surface group-hover:text-primary transition-colors">Database Internals</span>
                <span className="font-mono text-[10px] bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant">09</span>
              </li>
            </ul>
          </div>

          {/* Popular Posts */}
          <div>
            <h4 className="font-label text-xs font-bold text-outline uppercase tracking-widest mb-8">Popular Reads</h4>
            <div className="space-y-10">
              <div className="flex gap-4 items-start group cursor-pointer">
                <span className="font-mono text-xl text-surface-variant font-black group-hover:text-primary-container transition-colors">01</span>
                <div>
                  <h5 className="text-sm font-headline font-bold leading-tight text-on-surface mb-2">The architecture of a high-frequency trading engine.</h5>
                  <span className="font-mono text-[10px] text-outline italic">JAN 14, 2024</span>
                </div>
              </div>
              <div className="flex gap-4 items-start group cursor-pointer">
                <span className="font-mono text-xl text-surface-variant font-black group-hover:text-primary-container transition-colors">02</span>
                <div>
                  <h5 className="text-sm font-headline font-bold leading-tight text-on-surface mb-2">Why we moved away from Kubernetes.</h5>
                  <span className="font-mono text-[10px] text-outline italic">DEC 20, 2023</span>
                </div>
              </div>
              <div className="flex gap-4 items-start group cursor-pointer">
                <span className="font-mono text-xl text-surface-variant font-black group-hover:text-primary-container transition-colors">03</span>
                <div>
                  <h5 className="text-sm font-headline font-bold leading-tight text-on-surface mb-2">Visualizing Garbage Collection in Go.</h5>
                  <span className="font-mono text-[10px] text-outline italic">NOV 11, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="bg-surface-container-low rounded-xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-headline font-black text-on-surface mb-4">Engineering Weekly</h4>
              <p className="text-sm text-on-surface-variant mb-6 font-light">Join 45,000+ architects who receive our weekly deep-dive into complex systems.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-sm font-label focus:ring-2 focus:ring-primary/20 outline-none" placeholder="you@company.com" type="email"/>
                <button type="submit" className="w-full bg-on-surface text-surface py-3 rounded-xl font-label text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">Join Dispatch</button>
              </form>
            </div>
            {/* Decorative background element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </aside>
      </div>
      </div>
  );
}
