import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  const featuredPost = posts[0];

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero / Featured Section */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <div className="font-label text-primary uppercase tracking-[0.3em] text-[10px] mb-4">Featured_Core_Development</div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 text-glow capitalize">
            {featuredPost?.title.split('(')[0] || "LOW LEVEL PRECISION."}
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mb-12 leading-relaxed">
            {featuredPost?.excerpt || "Exploring the intricate depths of software systems and master-level engineering paradigms."}
          </p>
          <div className="flex items-center gap-6">
            <Link to={`/posts/${featuredPost?.id}`} className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 font-headline font-bold text-sm flex items-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95">
              READ ARTICLE
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
            </Link>
            <div className="font-label text-[10px] text-outline tracking-widest uppercase">
              EST. READ TIME: {featuredPost?.readTime || "14 MIN"}
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 relative group">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative aspect-[4/5] bg-surface-container-low border border-outline-variant/20 overflow-hidden glow-hover transition-all duration-500 rounded-lg">
            <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-alt="Technical abstract code display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfMOyX0YcBc4g_zq4gAoHnvJOPwxABhch2Dl3YgKFLMuEl2OuqfoVL4fdxW49CoN2OwwEJsEdoKzta9JsUuCwTqK6PKl-CQa0JRoNwjRyUqTO696lpL8E7_m71Y0gDxgPqq5rmfJUFQSFGEkdjFCe-AC6gM0cvXrv-W8UYLYpqZhBnlYQc9rdjfnq9Y4IkoUfnu1MgEEGqNVgk330e5rrVYu1E30SeQtFynBzyvLiNNAIDLa5KdcQQKa6mLQS9ne9l6rzWgdgC-J4" />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
              <div className="font-label text-primary text-[10px] mb-2">SYSTEMS_JOURNAL_LATEST</div>
              <div className="font-headline font-bold text-xl uppercase leading-tight text-white">Latest Technical Entry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Orbital Grid Section */}
      <div className="flex justify-between items-end mb-12 border-b border-outline-variant/10 pb-6">
        <div>
          <h2 className="font-headline text-4xl font-bold tracking-tight uppercase">Recent Journal Entries</h2>
          <div className="font-label text-[10px] text-primary tracking-widest mt-2 uppercase">Core_Systems_Audit</div>
        </div>
        <div className="flex items-center gap-4">
            <div className="font-mono text-[10px] text-outline uppercase tracking-widest hidden sm:block">
              Archive Size: {posts.length} Entries
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-outline-variant/10">
        {recentPosts.map((post, index) => (
          <article key={post.id} className="p-8 border-r border-b border-outline-variant/10 hover:bg-surface-container-low transition-all duration-500 group relative">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="font-label text-[10px]">0{index + 1}</span>
            </div>
            <div className="mb-8 overflow-hidden aspect-video bg-surface-container-lowest border border-outline-variant/10 rounded">
              <img className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" data-alt={post.title} src={`https://picsum.photos/seed/${post.id}/800/450`} />
            </div>
            <div className="font-label text-primary text-[10px] mb-4 uppercase">{post.category}</div>
            <h3 className="font-headline text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-on-surface-variant text-sm mb-8 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-label text-[10px] uppercase text-outline">{post.date}</span>
              <Link to={`/posts/${post.id}`} className="text-primary flex items-center gap-1 group/link">
                <span className="font-label text-[10px] font-bold">READ</span>
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Section Callout */}
      <section className="mt-24 bg-surface-container-high p-12 relative overflow-hidden rounded-xl">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <span className="font-headline text-[12rem] font-bold tracking-tighter leading-none select-none">CODE</span>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline text-4xl font-bold mb-6">Discover 100+ Deep-Dives</h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            I've expanded the engineering journal with 50+ new specialized articles on computer software, architecture, and system design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/posts" className="bg-primary text-on-primary font-headline font-bold px-8 py-3 text-sm hover:bg-primary-container transition-colors active:scale-95 rounded text-center">
              EXPLORE FULL ARCHIVE (105 POSTS)
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
