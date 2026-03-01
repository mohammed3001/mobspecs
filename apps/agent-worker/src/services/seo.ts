export function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s\u0600-\u06FF]/g, "")
    .split(/\s+/)
    .filter((token) => token.length > 3)
    .slice(0, 15);
}

export function optimizeTitle(originalTitle: string, locale: "en" | "ar"): string {
  if (locale === "ar") {
    return `${originalTitle} | مراجعة ومواصفات وسعر`;
  }
  return `${originalTitle} | Specs, Review, Price`;
}

export function scoreSeo(title: string, content: string, keywords: string[]): number {
  let score = 50;
  if (title.length >= 30 && title.length <= 65) score += 15;
  if (content.length > 140) score += 15;
  if (keywords.length >= 5) score += 20;
  return Math.min(score, 100);
}

export function generateSchema(title: string, locale: "en" | "ar"): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: locale,
    headline: title,
    datePublished: new Date().toISOString()
  };
}
