export type BlogPost = {
  slug:     string;
  title:    string;
  excerpt:  string;
  category: string;
  date:     string;
  readTime: string;
  image:    string;
  featured: boolean;
  body?:    string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug:     "the-art-of-doing-nothing",
    title:    "The Art of Doing Nothing",
    excerpt:  "We live in a culture that glorifies busyness. But what if the bravest thing you could do today was to simply sit — and breathe?",
    category: "Slow Living",
    date:     "February 2026",
    readTime: "4 min",
    image:    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    featured: true,
    body: `There's a Japanese concept called *ma* — the art of the pause, the beauty of the space between notes in music. Most of us have forgotten how to pause.\n\nSlowing down isn't laziness. It's a radical act of self-respect. When you choose to stop, you choose yourself over the noise.`,
  },
  {
    slug:     "morning-light-ritual",
    title:    "Why Morning Light Changes Everything",
    excerpt:  "The first light of day carries more than photons. It carries possibility — and your nervous system knows it.",
    category: "Rituals",
    date:     "February 2026",
    readTime: "6 min",
    image:    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    featured: true,
    body: `Morning sunlight is the most underrated health tool available to us. It's free, it's available every day, and it sets the clock for your entire physiology.`,
  },
  {
    slug:     "body-wisdom",
    title:    "Your Body Already Knows",
    excerpt:  "Before any supplement, before any protocol — your body has wisdom built in. Are you listening?",
    category: "Inner Health",
    date:     "January 2026",
    readTime: "5 min",
    image:    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    featured: false,
  },
  {
    slug:     "nature-as-medicine",
    title:    "Nature Is Not Optional",
    excerpt:  "Green spaces aren't a luxury. They're medicine — and the dose matters.",
    category: "Nature",
    date:     "January 2026",
    readTime: "3 min",
    image:    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    featured: false,
  },
  {
    slug:     "the-present-moment",
    title:    "The Present Moment Is All You Have",
    excerpt:  "Not a spiritual platitude — a neuroscientific fact. The now is the only place where real experience happens.",
    category: "Mindfulness",
    date:     "December 2025",
    readTime: "7 min",
    image:    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    featured: false,
  },
  {
    slug:     "slow-food-slow-life",
    title:    "Slow Food, Slow Life",
    excerpt:  "What you eat matters far less than how you eat it. The act of preparing and tasting food slowly is an act of radical presence.",
    category: "Nourishment",
    date:     "December 2025",
    readTime: "5 min",
    image:    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    featured: false,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
