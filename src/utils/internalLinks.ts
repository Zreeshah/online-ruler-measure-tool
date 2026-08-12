
// Internal links utility for SEO optimization

export type ArticleLink = {
  url: string;
  title: string;
  keywords: string[];
};

// All blog articles for internal linking
export const blogArticles: ArticleLink[] = [
  {
    url: "/",
    title: "Online Ruler Real Size - Precise Virtual Ruler",
    keywords: ["ruler", "measurement", "online", "virtual", "real size"]
  },
  {
    url: "/blog/how-to-read-a-ruler",
    title: "How to Read a Ruler: Complete Guide",
    keywords: ["ruler", "read", "measurement", "guide", "precision"]
  },
  {
    url: "/blog/depth-gauge-guide",
    title: "Depth Gauge Types and Basic Use",
    keywords: ["gauge", "depth", "instrument", "measurement", "precision"]
  },
  {
    url: "/blog/dimensionless-numbers",
    title: "Dimensionless Numbers: What They Are & Examples",
    keywords: ["numbers", "dimensionless", "physics", "engineering", "Reynolds"]
  },
  {
    url: "/blog/how-to-measure-on-phone",
    title: "How to Measure on Your Phone Screen",
    keywords: ["phone", "measure", "screen", "ruler", "mobile"]
  },
  {
    url: "/blog/metric-vs-imperial",
    title: "Metric vs U.S. Customary Measurement",
    keywords: ["metric", "imperial", "conversion", "measurement", "units"]
  },
  {
    url: "/blog/metric-system-explained",
    title: "The Metric System Explained: A Complete Guide",
    keywords: ["metric", "system", "units", "measurement", "decimal"]
  },
  {
    url: "/blog/measurement-units-guide",
    title: "Measurement Units Guide: Everything You Need to Know",
    keywords: ["units", "measurement", "guide", "conversion", "reference"]
  },
  {
    url: "/blog/how-to-use-a-ruler",
    title: "How to Use a Ruler: Step-by-Step Guide",
    keywords: ["ruler", "use", "measure", "guide", "steps"]
  },
  {
    url: "/blog/mks-system",
    title: "MKS System: Meter-Kilogram-Second Explained",
    keywords: ["MKS", "system", "meter", "kilogram", "second"]
  },
  {
    url: "/blog/natural-units-system",
    title: "Natural Units System: What It Is & How It Works",
    keywords: ["natural", "units", "physics", "Planck", "constants"]
  },
  {
    url: "/blog/clinometer-guide",
    title: "Clinometer: What It Is & How to Use It",
    keywords: ["clinometer", "angle", "slope", "measurement", "tool"]
  },
  {
    url: "/blog/imperial-measurement-system",
    title: "British Imperial and U.S. Customary Units",
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
