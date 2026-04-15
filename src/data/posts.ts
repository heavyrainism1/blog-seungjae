export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const posts: Post[] = Array.from({ length: 55 }, (_, i) => ({
  id: `${i + 1}`,
  title: [
    "The Future of AI in Modern Engineering",
    "Designing Scalable Microservices",
    "The Philosophy of Minimalist Design",
    "Understanding Deterministic Systems",
    "Beyond the Horizon of Quantum Computing",
    "Infrastructure as Code: Best Practices",
    "The Art of Refactoring Legacy Code",
    "Building Resilient Cloud Architectures"
  ][i % 8] + ` (Volume ${Math.floor(i / 8) + 1}, Part ${i % 8 + 1})`,
  excerpt: "An exploration of how the intersection of technology and discipline shapes the digital landscape of the 21st century.",
  content: `
    <p>This is a detailed exploration of our current engineering paradigms. As we move towards more complex systems, the need for clarity and structural integrity becomes paramount.</p>
    <p>In this article, we delve deep into the mechanics of building software that outlasts its creators, focusing on the discipline and architectural choices that define modern excellence.</p>
    <h3>The Core Principles</h3>
    <p>Complexity is often mistaken for scalability. We examine why distributed monoliths are the silent killer of productivity and how to return to the elegance of modular design.</p>
    <ul>
      <li>Principle 1: Simplicity is the ultimate sophistication.</li>
      <li>Principle 2: Design for failure, expect consistency.</li>
      <li>Principle 3: Respect the user's cognitive load.</li>
    </ul>
    <p>Conclusion: The future belongs to those who build with precision and foresight.</p>
  `,
  date: new Date(2024, 7, 24 - i).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
  category: ["Architecture", "Infrastructure", "Philosophy", "Database", "Security"][i % 5],
  readTime: `${5 + (i % 15)} min read`
}));
