export type Locale = "en" | "ar";

export type Brand = {
  id: string;
  name: string;
  slug: string;
  country: string;
};

export type PhoneSpec = {
  group: string;
  label: string;
  value: string;
};

export type PhoneModel = {
  id: string;
  brandSlug: string;
  modelName: string;
  slug: string;
  releaseDate: string;
  heroImage: string;
  priceUsd: number;
  specs: PhoneSpec[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  body: string;
  locale: Locale;
  category: "news" | "review" | "guide";
  publishedAt: string;
};
