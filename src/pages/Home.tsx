import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero / Featured Section */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <div className="font-label text-primary uppercase tracking-[0.3em] text-[10px] mb-4">Featured_Core_Development</div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 text-glow">
            LOW LEVEL<br />PRECISION.
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-12 leading-relaxed">
            Exploring the intricate depths of C/C++ memory management and how proximity to hardware shapes modern systems engineering in a world of high-level abstractions.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 font-headline font-bold text-sm flex items-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95">
              READ ARTICLE
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <div className="font-label text-[10px] text-outline tracking-widest uppercase">
              EST. READ TIME: 14 MIN
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 relative group">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative aspect-[4/5] bg-surface-container-low border border-outline-variant/20 overflow-hidden glow-hover transition-all duration-500 rounded-lg">
            <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-alt="Technical abstract code display on a monitor in a dark room with cyan glowing accents and shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfMOyX0YcBc4g_zq4gAoHnvJOPwxABhch2Dl3YgKFLMuEl2OuqfoVL4fdxW49CoN2OwwEJsEdoKzta9JsUuCwTqK6PKl-CQa0JRoNwjRyUqTO696lpL8E7_m71Y0gDxgPqq5rmfJUFQSFGEkdjFCe-AC6gM0cvXrv-W8UYLYpqZhBnlYQc9rdjfnq9Y4IkoUfnu1MgEEGqNVgk330e5rrVYu1E30SeQtFynBzyvLiNNAIDLa5KdcQQKa6mLQS9ne9l6rzWgdgC-J4" />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
              <div className="font-label text-primary text-[10px] mb-2">SYSTEMS_BLOG_042</div>
              <div className="font-headline font-bold text-xl uppercase leading-tight text-white">Memory Leaks &amp; Pointers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Orbital Grid Section */}
      <div className="flex justify-between items-end mb-12 border-b border-outline-variant/10 pb-6">
        <div>
          <h2 className="font-headline text-4xl font-bold tracking-tight uppercase">Recent Architecture</h2>
          <div className="font-label text-[10px] text-primary tracking-widest mt-2 uppercase">Frontend_Systems_Audit</div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 border border-outline-variant/20 hover:border-primary/50 transition-colors rounded">
            <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
          </button>
          <button className="p-2 border border-outline-variant/20 hover:border-primary/50 transition-colors rounded">
            <span className="material-symbols-outlined" data-icon="view_agenda">view_agenda</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-outline-variant/10">
        {/* Article Card 1 */}
        <article className="p-8 border-r border-b border-outline-variant/10 hover:bg-surface-container-low transition-all duration-500 group relative">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="font-label text-[10px]">01</span>
          </div>
          <div className="mb-8 overflow-hidden aspect-video bg-surface-container-lowest border border-outline-variant/10 rounded">
            <img className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" data-alt="Abstract 3D geometric shapes representing modular frontend components in shades of blue and metallic silver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp3KMqL_UzOhq3VYB2Hdj3hWPDG-AMnt9oeT_LPbH-Xm5W3OVTFG3YcIaEcdG1cIRZxOVfzEGAl4Y5Qhsm_KBI8Gm7Q8Hb8iPCLBHv-OxBzzKAnp9M2P1W4VcNTZcz4XoihBhBFQSETokDcj1AmBk2DdE9rvA45uZJ7salQuPZte1QlSfCsKQ-mbrE-f6yadSKG2Nxu9syXfI2CL7QN1kW-ZPAuy3IPb5qdxj4iihZRlRTpVvElxjVqKj3kOpGBUFL3rxpJy12fTc" />
          </div>
          <div className="font-label text-primary text-[10px] mb-4">ARCHITECTURE</div>
          <h3 className="font-headline text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">The Micro-Frontend Dilemma</h3>
          <p className="text-on-surface-variant text-sm mb-8 line-clamp-3">
            Is the complexity of federated modules worth the developer experience trade-off? An deep dive into modern orchestration.
          </p>
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase text-outline">Oct 24, 2024</span>
            <Link to="#" className="text-primary flex items-center gap-1 group/link">
              <span className="font-label text-[10px] font-bold">READ</span>
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
            </Link>
          </div>
        </article>

        {/* Article Card 2 */}
        <article className="p-8 border-r border-b border-outline-variant/10 hover:bg-surface-container-low transition-all duration-500 group relative">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="font-label text-[10px]">02</span>
          </div>
          <div className="mb-8 overflow-hidden aspect-video bg-surface-container-lowest border border-outline-variant/10 rounded">
            <img className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" data-alt="Matrix-like code scrolling on a vertical monitor with cool blue light reflections on a keyboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxyDICvbYUCg-kCk8pw08k_ww98RL4j1zSwebJ_duHQnhKmX-z5HQ_qCbP0fAGbpJlZf5QuG8NeCYt8cpnJXy9iS52japTJukLBdSlJHw6h6NSTCLDqU7TU3jaw_OyiMGvX3tWBJlzsgmkcNTPAUKLYqTxOMwkTRXtDMhCztRGPl6aqe0H5B-SyZxBoL0h4zKtGGLiVOoPlo-D4gkEYaYjjPFXv--8sRB3oXupoYOxFncWsp0qWZdcslpK-LL-EDgT-OctgflFX3o" />
          </div>
          <div className="font-label text-primary text-[10px] mb-4">REACT_INTERNALS</div>
          <h3 className="font-headline text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">Server Components in Production</h3>
          <p className="text-on-surface-variant text-sm mb-8 line-clamp-3">
            Bypassing the hydration bottleneck using Next.js 15 and the new RSC payload architecture for ultra-fast LCP.
          </p>
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase text-outline">Oct 21, 2024</span>
            <Link to="#" className="text-primary flex items-center gap-1 group/link">
              <span className="font-label text-[10px] font-bold">READ</span>
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
            </Link>
          </div>
        </article>

        {/* Article Card 3 */}
        <article className="p-8 border-r border-b border-outline-variant/10 hover:bg-surface-container-low transition-all duration-500 group relative">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="font-label text-[10px]">03</span>
          </div>
          <div className="mb-8 overflow-hidden aspect-video bg-surface-container-lowest border border-outline-variant/10 rounded">
            <img className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" data-alt="Digital grid visualization of a global network with glowing nodes and technical data overlays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlWm7xOWv0Gj21B8DtfBQX1CverfFvz-U-ItouYmg7OmlXdVtBF6FBHSQArgsC2rZQKbi-s7mIQQk1ObfX3kIlWSbCJMcpPtLO2jmaz5NWct6MlcB21hPfw8_GdLTA3kD52mJ-5SIyPeH3-JL_cDE_KvmLThrjlukWTgCl9esXXC4f2q9ZoP2HPWCb5zbcA2n9RENFqMlW5QLy4uNHhGk8SEnlX0OYdOxDANTOj7E0tDntxlynVB1a-loVXJbH6ChsGpAgk_u4zDU" />
          </div>
          <div className="font-label text-primary text-[10px] mb-4">DEV_OPS</div>
          <h3 className="font-headline text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">The Edge Computing Frontier</h3>
          <p className="text-on-surface-variant text-sm mb-8 line-clamp-3">
            Moving logic away from central data centers. Why your next project should be deployed on the global edge.
          </p>
          <div className="flex items-center justify-between">
            <span className="font-label text-[10px] uppercase text-outline">Oct 18, 2024</span>
            <Link to="#" className="text-primary flex items-center gap-1 group/link">
              <span className="font-label text-[10px] font-bold">READ</span>
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
            </Link>
          </div>
        </article>
      </div>

      {/* Section Callout */}
      <section className="mt-24 bg-surface-container-high p-12 relative overflow-hidden rounded-xl">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <span className="font-headline text-[12rem] font-bold tracking-tighter leading-none select-none">CODE</span>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline text-4xl font-bold mb-6">Mastering the Low-Level</h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Join my monthly deep-dive into compiler theory and systems programming. No fluff, just the raw engineering concepts that define the backbone of modern technology.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-sm font-label px-6 py-3 w-full sm:w-80 outline-none rounded" placeholder="YOUR_EMAIL_ADDRESS" type="email" />
            <button type="submit" className="bg-primary text-on-primary font-headline font-bold px-8 py-3 text-sm hover:bg-primary-container transition-colors active:scale-95 rounded">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
}
