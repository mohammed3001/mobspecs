import Link from "next/link";
import type { Locale } from "../lib/types";

type HeaderProps = {
  locale: Locale;
};

const labels: Record<Locale, Record<string, string>> = {
  en: {
    phones: "Phones",
    brands: "Brands",
    compare: "Compare",
    articles: "Articles",
    admin: "Admin",
    seo: "SEO"
  },
  ar: {
    phones: "الهواتف",
    brands: "العلامات",
    compare: "المقارنة",
    articles: "المقالات",
    admin: "لوحة التحكم",
    seo: "SEO"
  }
};

export function Header({ locale }: HeaderProps) {
  const t = labels[locale];

  return (
    <header className="glass nav-shell">
      <Link href={`/${locale}`} className="brand-title">
        Mobspecs
      </Link>
      <nav className="nav-links">
        <Link href={`/${locale}`}>{t.phones}</Link>
        <Link href={`/${locale}/brands`}>{t.brands}</Link>
        <Link href={`/${locale}/compare`}>{t.compare}</Link>
        <Link href={`/${locale}/articles`}>{t.articles}</Link>
        <Link href={`/${locale}/admin`}>{t.admin}</Link>
        <Link href={`/${locale}/seo`}>{t.seo}</Link>
      </nav>
    </header>
  );
}
