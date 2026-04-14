import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-12">
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
  );
}
