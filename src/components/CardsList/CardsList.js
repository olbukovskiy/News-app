import { Card } from "components/Card/Card";
import styles from "./CardsList.module.scss";

export const CardsList = function ({ articles }) {
  return (
    <ul className={styles.cardsList}>
      {articles.map((article) => {
        return <Card key={article.articleId} {...article} />;
      })}
    </ul>
  );
};
