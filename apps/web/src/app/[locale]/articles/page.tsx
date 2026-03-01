import { articles } from "../../../lib/data";
import type { Locale } from "../../../lib/types";

export default function ArticlesPage({ params }: { params: { locale: Locale } }) {
  const localeArticles = articles.filter((article) => article.locale === params.locale);

  return (
    <section className="stack">
      <h2>News and Articles</h2>
      {localeArticles.map((article) => (
        <article key={article.id} className="glass">
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <small>
            {article.category} · {article.publishedAt}
          </small>
        </article>
      ))}
    </section>
  );
}
