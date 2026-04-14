import React from 'react';

export default function Series() {
  return (
    <div className="pt-32 max-w-7xl mx-auto px-12">
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
