const seoRows = [
  { page: "/en/phones/apple/iphone-15-pro", score: 92, status: "excellent" },
  { page: "/en/articles/iphone-15-pro-long-term-review", score: 78, status: "good" },
  { page: "/ar/articles/souk-smartphones-weekly-news-ar", score: 69, status: "improve" }
];

export default function SeoPage() {
  return (
    <section className="stack">
      <h2>SEO Engine Dashboard</h2>
      <div className="glass">
        <table className="data-table">
          <thead>
            <tr>
              <th>Page</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {seoRows.map((row) => (
              <tr key={row.page}>
                <td>{row.page}</td>
                <td>{row.score}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
