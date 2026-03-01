import Link from "next/link";
import type { Locale, PhoneModel } from "../lib/types";

type PhoneCardProps = {
  phone: PhoneModel;
  locale: Locale;
};

export function PhoneCard({ phone, locale }: PhoneCardProps) {
  return (
    <article className="glass card-grid-item">
      <img src={phone.heroImage} alt={phone.modelName} className="phone-image" />
      <div>
        <h3>{phone.modelName}</h3>
        <p>${phone.priceUsd}</p>
        <p>{phone.releaseDate}</p>
        <Link href={`/${locale}/phones/${phone.brandSlug}/${phone.slug}`}>View Specs</Link>
      </div>
    </article>
  );
}
