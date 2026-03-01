import type { ReactNode } from "react";
import { Header } from "../../components/header";
import type { Locale } from "../../lib/types";

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = params.locale;

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <main className="container">
        <Header locale={locale} />
        {children}
      </main>
    </div>
  );
}
