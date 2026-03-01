import { getBrandBySlug, getPhoneBySlugs } from "../../../../../lib/data";

export default function PhoneDetailsPage({
  params
}: {
  params: { brand: string; model: string };
}) {
  const phone = getPhoneBySlugs(params.brand, params.model);
  const brand = getBrandBySlug(params.brand);

  if (!phone || !brand) {
    return <p>Phone not found.</p>;
  }

  return (
    <section className="stack">
      <article className="glass hero">
        <h1>
          {brand.name} {phone.modelName}
        </h1>
        <p>Release Date: {phone.releaseDate}</p>
        <p>Price: ${phone.priceUsd}</p>
      </article>
      <article className="glass">
        <h2>Specifications</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Group</th>
              <th>Label</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {phone.specs.map((spec) => (
              <tr key={`${spec.group}-${spec.label}`}>
                <td>{spec.group}</td>
                <td>{spec.label}</td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
