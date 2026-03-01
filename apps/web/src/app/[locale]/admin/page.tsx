export default function AdminPage() {
  return (
    <section className="stack">
      <h2>Admin Control Panel</h2>
      <div className="card-grid">
        <article className="glass">
          <h3>Catalog Queue</h3>
          <p>Review pending brand/model/spec updates from automation jobs.</p>
        </article>
        <article className="glass">
          <h3>Content Queue</h3>
          <p>Approve AI-generated reviews and articles for publication.</p>
        </article>
        <article className="glass">
          <h3>Ad Slots</h3>
          <p>Configure AdSense, affiliate placements, and sponsored blocks.</p>
        </article>
      </div>
    </section>
  );
}
