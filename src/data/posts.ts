export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const posts: Post[] = Array.from({ length: 105 }, (_, i) => {
  const softwareTopics = [
    "Compiler Design Fundamentals",
    "Operating System Kernels",
    "Functional Programming Paradigms",
    "Distributed Consensus Algorithms",
    "Database Indexing Strategies",
    "Asynchronous I/O Models",
    "Virtual Machine Implementation",
    "Memory Management Safety",
    "Concurrency vs Parallelism",
    "Type Theory in Modern Languages",
    "Network Protocol Buffer Optimization",
    "Garbage Collection Internals",
    "Static Site Generation Patterns",
    "API Gateway Architecture",
    "Logic Programming in Prolog",
    "The Evolution of Assembly",
    "WebAssembly and the Future of the Web",
    "Kernel-level Networking with eBPF",
    "Reactive Programming in Distributed Systems",
    "Domain-Driven Design in Software"
  ];

  const categories = ["Core Software", "Infrastructure", "Algorithm", "Systems", "Language Theory"];
  
  return {
    id: `${i + 1}`,
    title: `${softwareTopics[i % softwareTopics.length]} (Part ${Math.floor(i / softwareTopics.length) + 1})`,
    excerpt: `A deep dive into the technical nuances of ${softwareTopics[i % softwareTopics.length]} and its critical role in modern computer software engineering.`,
    content: `
      <p>In this installment of our series on ${softwareTopics[i % softwareTopics.length]}, we explore the underlying mechanical sympathy required to master modern software systems.</p>
      <p>As software scales, the abstractions we rely on often hide the complexity that can lead to systemic failure. By understanding the low-level details of how ${softwareTopics[i % softwareTopics.length]} works, we can build more resilient and performant applications.</p>
      <h3>Key Software Concepts</h3>
      <p>Effective software engineering requires a balance between high-level architectural patterns and low-level optimization. We cover the following in this entry:</p>
      <ul>
        <li>Structural Integrity: Building code that scales.</li>
        <li>State Management: Navigating the complexity of distributed data.</li>
        <li>Performance Profiling: Finding and eliminating bottlenecks.</li>
      </ul>
      <p>This is page ${i + 1} of our comprehensive software engineering journal.</p>
    `,
    date: new Date(2024, 7, 24 - i).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    category: categories[i % categories.length],
    readTime: `${5 + (i % 15)} min read`
  };
});
