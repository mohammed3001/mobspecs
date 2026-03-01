export function writeArticle(topic: string, locale: "en" | "ar"): { title: string; body: string } {
  if (locale === "ar") {
    return {
      title: `مراجعة شاملة: ${topic}`,
      body: `هذا محتوى مُنشأ آليًا حول ${topic} مع نقاط قوة وضعف وتجربة استخدام عملية.`
    };
  }

  return {
    title: `Complete Review: ${topic}`,
    body: `This AI-generated article covers ${topic} with practical strengths, weaknesses, and usage insights.`
  };
}

export function writeReview(model: string, locale: "en" | "ar"): { summary: string; verdict: string } {
  if (locale === "ar") {
    return {
      summary: `ملخص أداء ${model}: شاشة ممتازة وأداء قوي وكاميرا متوازنة.`,
      verdict: "خيار قوي للفئة العليا مع قيمة استخدام يومية ممتازة."
    };
  }

  return {
    summary: `${model} performance summary: excellent display, strong chipset, and balanced cameras.`,
    verdict: "A compelling flagship choice with strong day-to-day value."
  };
}
