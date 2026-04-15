export interface SeriesItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  imageAlt: string;
  imageUrl: string;
}

export const seriesItems: SeriesItem[] = [
  {
    id: "1",
    title: "Understanding Paxos and Raft: A Comparative Study",
    description: "Consensus algorithms are the backbone of distributed systems. We explore why Raft gained popularity over the classic Paxos implementation in modern cloud environments.",
    category: "Distributed",
    readTime: "12 MIN READ",
    imageAlt: "A futuristic digital representation of a neural network grid with glowing nodes and cyan lines",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoUgvZ6iD2lRQAkd38EhBCumtbUV-MA2iK59ptMC1HRNfsLXsq4E0vrUrSNOGhohaU881ZjyGh9zKARZfyBw3JDgENsAvhxhZLjXb6GqgrSKmyd3Q0wddtOcr5vONCaXAO23zjyBwN-MEIZvBXExvT5Rz_-qHwVy6SNTOMHiViVAynhbdoDdXtjPrN9O8BDjKiSzJXebM_bakFrDC1x5S7rtXeK8wrlNjTmCNvrzV5j2G5tmDRpU6cr7-yhh1CUyEHTxCox0Rl4xQ"
  },
  {
    id: "2",
    title: "Optimizing L3 Cache Locality in Rust",
    description: "Hardware-aware programming is no longer optional for high-performance applications. Learn how to structure data for maximum CPU cache efficiency.",
    category: "Performance",
    readTime: "08 MIN READ",
    imageAlt: "Sleek modern server room with glowing blue status indicators and reflection on polished floor",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH2Trkr3rZ8RRQyq1FsuoPRlFl7Dn-SkeujaBvnbnWKfqJzsvNQPuZMZcmw_sH0S7OcPXSq1V09Oxb2i5o5d6yikwX9gdwk0EZwY7ti-Ero0Odj3FU911BCiSor73Hn1HtJrQbvMJddUi-zMs3PAiC1L286uwXxboGYGXENPkGG7My2dIHyLR7puTipiAp5ZvjTrEMg4HlCPqn3VVJjJ8kxncohU3xO4LbIM8QerzbZwWbUDKyEaMcal795c9MoSumTD7Ez-mZNsM"
  },
  {
    id: "3",
    title: "The Microservices Fallacy",
    description: "When does the operational overhead of microservices outweigh the scalability benefits? An honest look at modular monoliths in 2024.",
    category: "Architecture",
    readTime: "15 MIN READ",
    imageAlt: "Satellite view of Earth at night with illuminated fiber optic global network connections",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBC4MDiT88f1dmgM3oudlvFee8eV74fsqt9g9VI_MiJxoR0YmT7JvBt7jzCuRjRavhKx_N4MXtmT19AFEFmqG_xR2eit3PXuPPC2Vq4V-msxF8-OjKcHUYbM51r7LQw1ETTzSH734izb53-LuQrVeFyaII2u7Nuv7iPMUQu5gv2OWQWQJJsFKOADaNBvhHuKg4fXhs6KDOFOF7woSp_HprZ6ATX41CaKjy3mgzJJGBva3fEoSr3kAQUSl1wy6z7XGMkscX32DoOM"
  },
  {
    id: "4",
    title: "Building Custom eBPF Observability Tools",
    description: "Peering into the kernel without modifying source code. A hands-on guide to using eBPF for real-time production debugging.",
    category: "Tooling",
    readTime: "05 MIN READ",
    imageAlt: "Minimalist abstract code displayed on a high-resolution monitor with soft focus background",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxEUb6fDQid-9BXSdAToVRoa-TnVR9hUM5N9SeywGpOGDC8dNt6jYDAkLLR7hhBRSAVLaknVkXpm3xXY4_7HwYgJmxfpANiW-fqUioqTkVZtk0FWu-kFURVVoLFhhqL3IfmYPrekca9QMTb3mAQ-6p4i726s4CW_URvr5D-8GoLXKFgrA9gyXfWwRbtC9Q8g0MhMbyA5mhIqYe_vRTfPfyaR3O94QJt5ZK54J2THoM3g_qZWaC1vqAsc7nOI2UUeSb8UYhH6cFKTs"
  }
];
