import { phones } from "../../../lib/data";

export default function ComparePage() {
  const selected = phones.slice(0, 2);
  const [first, second] = selected;

  return (
    <section className="stack">
      <h2>Phone Comparison</h2>
      <div className="glass">
        <table className="data-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>{first.modelName}</th>
              <th>{second.modelName}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td>${first.priceUsd}</td>
              <td>${second.priceUsd}</td>
            </tr>
            <tr>
              <td>Chipset</td>
              <td>{first.specs.find((s) => s.label === "Chipset")?.value ?? "-"}</td>
              <td>{second.specs.find((s) => s.label === "Chipset")?.value ?? "-"}</td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>{first.specs.find((s) => s.label === "Capacity")?.value ?? "-"}</td>
              <td>{second.specs.find((s) => s.label === "Capacity")?.value ?? "-"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
