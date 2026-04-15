import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-48 pb-32 max-w-7xl mx-auto px-12 text-center">
        <h1 className="text-4xl font-bold text-on-surface mb-8">Post not found.</h1>
        <Link to="/posts" className="text-primary hover:underline">Back to Journal</Link>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32">
      <article className="max-w-4xl mx-auto px-12">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/posts" className="text-primary font-label text-sm tracking-widest uppercase flex items-center hover:gap-2 transition-all">
              <span className="material-symbols-outlined mr-2 text-sm" data-icon="arrow_back">arrow_back</span>
              Back to Journal
            </Link>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <span className="font-label text-xs uppercase tracking-widest px-4 py-1.5 bg-surface-container rounded-full text-on-surface-variant font-medium">
              {post.category}
            </span>
            <span className="font-mono text-xs text-outline tracking-wider">{post.date}</span>
            <span className="font-mono text-xs text-outline tracking-wider">{post.readTime}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-on-surface mb-12">
            {post.title}
          </h1>
          <p className="text-2xl text-on-surface-variant/90 font-light leading-relaxed italic">
            {post.excerpt}
          </p>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none text-on-surface-variant/80 font-light leading-loose space-y-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <footer className="mt-32 pt-16 border-t border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-sm">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">About the Author</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Exploring the boundaries of digital systems and human-computer interaction through rigorous architectural discipline.
              </p>
            </div>
            <div className="flex gap-8">
                <button className="flex items-center font-label text-xs uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
                  Share Entry
                  <span className="material-symbols-outlined ml-2 text-sm" data-icon="share">share</span>
                </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default PostDetail;
