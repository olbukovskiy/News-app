import { useState } from "react";
import { Card } from "components/Card/Card";
import styles from "./CardsList.module.scss";

export const CardsList = function () {
  const [articles, setArticles] = useState([]);

  return (
    <ul className={styles.cardsList}>
      {/* {articles.map((article) => {
        return <Card key={article.id} article={article} />;
      })} */}
    </ul>
  );
};
