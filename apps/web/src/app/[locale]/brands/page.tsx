import { brands } from "../../../lib/data";

export default function BrandsPage() {
  return (
    <section className="stack">
      <h2>Brand Management</h2>
      <div className="glass">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Slug</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id}>
                <td>{brand.name}</td>
                <td>{brand.slug}</td>
                <td>{brand.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
