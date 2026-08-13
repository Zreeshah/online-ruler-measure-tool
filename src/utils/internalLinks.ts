
// Internal links utility for SEO optimization

export type ArticleLink = {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  publishedDate?: string;
  modifiedDate?: string;
};

// All blog articles for internal linking
export const blogArticles: ArticleLink[] = [
  {
    url: "/",
    title: "Online Ruler Real Size - Precise Virtual Ruler",
    description: "Calibrate an on-screen ruler for quick measurements in millimetres, centimetres, and inches.",
    keywords: ["ruler", "measurement", "online", "virtual", "real size"]
  },
  {
    url: "/blog/how-to-read-a-ruler",
    title: "How to Read a Ruler: Markings and Examples",
    description: "Learn how to identify centimetre, millimetre, inch, and fractional-inch markings and avoid common reading errors.",
    publishedDate: "2025-04-13",
    keywords: ["ruler", "read", "measurement", "guide", "precision"]
  },
  {
    url: "/blog/depth-gauge-guide",
    title: "Depth Gauge Types and Basic Use",
    description: "Compare common depth-gauge types, learn the basic measuring procedure, and understand practical accuracy limits.",
    publishedDate: "2025-05-15",
    modifiedDate: "2026-08-13",
    keywords: ["gauge", "depth", "instrument", "measurement", "precision"]
  },
  {
    url: "/blog/dimensionless-numbers",
    title: "Dimensionless Numbers: Meaning and Examples",
    description: "Understand dimensionless quantities and see how Reynolds, Mach, and other ratios are used in science and engineering.",
    publishedDate: "2025-04-22",
    modifiedDate: "2026-08-13",
    keywords: ["numbers", "dimensionless", "physics", "engineering", "Reynolds"]
  },
  {
    url: "/blog/how-to-measure-on-phone",
    title: "How to Measure on Your Phone Screen",
    description: "Calibrate a phone-screen ruler, position small objects correctly, and recognize when a physical tool is the safer choice.",
    publishedDate: "2025-04-18",
    keywords: ["phone", "measure", "screen", "ruler", "mobile"]
  },
  {
    url: "/blog/metric-vs-imperial",
    title: "Metric vs U.S. Customary Measurement",
    description: "Compare SI metric and U.S. customary units, distinguish British Imperial units, and review common conversions.",
    publishedDate: "2025-04-15",
    keywords: ["metric", "imperial", "conversion", "measurement", "units"]
  },
  {
    url: "/blog/metric-system-explained",
    title: "Metric System Basics: Units and Prefixes",
    description: "Explore the history, seven SI base units, decimal prefixes, and practical advantages of the modern metric system.",
    publishedDate: "2025-04-20",
    modifiedDate: "2026-08-13",
    keywords: ["metric", "system", "units", "measurement", "decimal"]
  },
  {
    url: "/blog/measurement-units-guide",
    title: "Common Measurement Units: Quick Reference",
    description: "Review common units for length, mass, volume, and temperature with practical definitions and conversion examples.",
    publishedDate: "2025-04-25",
    keywords: ["units", "measurement", "guide", "conversion", "reference"]
  },
  {
    url: "/blog/how-to-use-a-ruler",
    title: "How to Use a Ruler: Step-by-Step Guide",
    description: "Follow a repeatable measuring technique, from choosing the right scale and aligning zero to recording the result.",
    publishedDate: "2025-04-28",
    keywords: ["ruler", "use", "measure", "guide", "steps"]
  },
  {
    url: "/blog/mks-system",
    title: "MKS System: Meter-Kilogram-Second Explained",
    description: "Learn how the metre, kilogram, and second form the mechanical foundation of MKS units and relate to modern SI.",
    publishedDate: "2025-05-01",
    modifiedDate: "2026-08-13",
    keywords: ["MKS", "system", "meter", "kilogram", "second"]
  },
  {
    url: "/blog/natural-units-system",
    title: "Natural Units in Physics: Practical Overview",
    description: "Learn why physicists set selected fundamental constants to one and how natural-unit conventions simplify equations.",
    publishedDate: "2025-05-05",
    modifiedDate: "2026-08-13",
    keywords: ["natural", "units", "physics", "Planck", "constants"]
  },
  {
    url: "/blog/clinometer-guide",
    title: "Clinometer: Measure Slope and Height",
    description: "Learn how clinometers measure slope and inclination, compare instrument types, and review common applications.",
    publishedDate: "2025-05-08",
    modifiedDate: "2026-08-13",
    keywords: ["clinometer", "angle", "slope", "measurement", "tool"]
  },
  {
    url: "/blog/imperial-measurement-system",
    title: "Imperial vs U.S. Customary Units",
    description: "Understand the shared history and important differences between British Imperial and U.S. customary units.",
    publishedDate: "2025-05-12",
    keywords: ["imperial", "measurement", "system", "units", "conversion"]
  }
];

// Find articles related to current article based on keyword matching
export const getRelatedArticles = (currentUrl: string, count: number = 2): ArticleLink[] => {
  const currentArticle = blogArticles.find(article => article.url === currentUrl);
  
  if (!currentArticle) {
    // If current article is not found, return the first distinct guides.
    const filtered = blogArticles.filter(article => article.url !== "/");
    return filtered.slice(0, count);
  }
  
  // Score articles by keyword overlap
  const scored = blogArticles
    .filter(article => article.url !== currentUrl && article.url !== "/")
    .map(article => {
      const commonKeywords = article.keywords.filter(keyword => 
        currentArticle.keywords.includes(keyword)
      );
      
      return {
        article,
        score: commonKeywords.length
      };
    })
    .sort((a, b) => b.score - a.score);
  
  return scored.map(item => item.article).slice(0, count);
};

// Generate a contextual link with surrounding text
export const createContextualLink = (article: ArticleLink): string => {
  const linkPhrases = [
    `For more information about ${article.keywords[0] || "this topic"}, visit <a href="${article.url}" class="text-blue-600 hover:underline">${article.title}</a>.`,
    `Learn more about ${article.keywords[0] || "measurement"} in our <a href="${article.url}" class="text-blue-600 hover:underline">complete guide</a>.`,
    `If you're interested in ${article.keywords[1] || "this topic"}, check out <a href="${article.url}" class="text-blue-600 hover:underline">this article</a>.`,
    `Learn more on our <a href="${article.url}" class="text-blue-600 hover:underline">main page</a> about ${article.keywords[0] || "measurement tools"}.`
  ];
  
  // For homepage, use more specific phrases
  if (article.url === "/") {
    return `Try our <a href="/" class="text-blue-600 hover:underline">online ruler</a> to take precise measurements on your screen.`;
  }
  
  const randomIndex = Math.floor(Math.random() * linkPhrases.length);
  return linkPhrases[randomIndex];
};
