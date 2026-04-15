import { seriesItems } from '../data/series';

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
            {seriesItems.map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-surface-container">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt={item.imageAlt} src={item.imageUrl}/>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold">{item.category}</span>
                  <span className="font-mono text-[10px] text-outline italic">{item.readTime}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface leading-tight mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </article>
            ))}
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
