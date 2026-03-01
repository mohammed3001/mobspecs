import { phones } from "../../lib/data";
import { PhoneCard } from "../../components/phone-card";
import type { Locale } from "../../lib/types";

export default function LocaleHome({ params }: { params: { locale: Locale } }) {
  return (
    <section className="stack">
      <div className="glass hero">
        <h1>Premium Mobile Specs Platform</h1>
        <p>Apple-inspired UI + phone database + comparisons + articles + SEO management.</p>
      </div>
      <div className="card-grid">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} locale={params.locale} />
        ))}
      </div>
    </section>
  );
}
