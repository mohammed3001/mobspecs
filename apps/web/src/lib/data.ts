import type { Article, Brand, Locale, PhoneModel } from "./types";

export const locales: Locale[] = ["en", "ar"];

export const brands: Brand[] = [
  { id: "b1", name: "Apple", slug: "apple", country: "USA" },
  { id: "b2", name: "Samsung", slug: "samsung", country: "South Korea" },
  { id: "b3", name: "Xiaomi", slug: "xiaomi", country: "China" }
];

export const phones: PhoneModel[] = [
  {
    id: "p1",
    brandSlug: "apple",
    modelName: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    releaseDate: "2023-09-22",
    heroImage: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=1200&q=80",
    priceUsd: 999,
    specs: [
      { group: "Display", label: "Size", value: "6.1-inch LTPO OLED" },
      { group: "Platform", label: "Chipset", value: "Apple A17 Pro" },
      { group: "Memory", label: "RAM", value: "8GB" },
      { group: "Battery", label: "Capacity", value: "3274 mAh" }
    ]
  },
  {
    id: "p2",
    brandSlug: "samsung",
    modelName: "Galaxy S24 Ultra",
    slug: "galaxy-s24-ultra",
    releaseDate: "2024-01-31",
    heroImage: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80",
    priceUsd: 1299,
    specs: [
      { group: "Display", label: "Size", value: "6.8-inch AMOLED 2X" },
      { group: "Platform", label: "Chipset", value: "Snapdragon 8 Gen 3" },
      { group: "Memory", label: "RAM", value: "12GB" },
      { group: "Battery", label: "Capacity", value: "5000 mAh" }
    ]
  },
  {
    id: "p3",
    brandSlug: "xiaomi",
    modelName: "Xiaomi 14",
    slug: "xiaomi-14",
    releaseDate: "2023-11-01",
    heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    priceUsd: 799,
    specs: [
      { group: "Display", label: "Size", value: "6.36-inch LTPO OLED" },
      { group: "Platform", label: "Chipset", value: "Snapdragon 8 Gen 3" },
      { group: "Memory", label: "RAM", value: "12GB" },
      { group: "Battery", label: "Capacity", value: "4610 mAh" }
    ]
  }
];

export const articles: Article[] = [
  {
    id: "a1",
    slug: "iphone-15-pro-long-term-review",
    title: "iPhone 15 Pro Long-Term Review",
    body: "Apple's titanium redesign improves comfort while preserving flagship speed and camera reliability.",
    locale: "en",
    category: "review",
    publishedAt: "2026-01-12"
  },
  {
    id: "a2",
    slug: "galaxy-s24-ultra-camera-guide",
    title: "Galaxy S24 Ultra Camera Guide",
    body: "A practical camera guide for zoom, portrait workflow, and low-light capture.",
    locale: "en",
    category: "guide",
    publishedAt: "2026-02-03"
  },
  {
    id: "a3",
    slug: "souk-smartphones-weekly-news-ar",
    title: "أخبار الهواتف الذكية الأسبوعية",
    body: "تغطية أسبوعية لأبرز الإطلاقات والتحديثات في سوق الهواتف الذكية.",
    locale: "ar",
    category: "news",
    publishedAt: "2026-02-15"
  }
];

export function getPhoneBySlugs(brandSlug: string, modelSlug: string): PhoneModel | undefined {
  return phones.find((phone) => phone.brandSlug === brandSlug && phone.slug === modelSlug);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}
