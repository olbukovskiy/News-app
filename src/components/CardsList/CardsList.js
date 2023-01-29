import { useSelector } from "react-redux";

import { Card } from "components/Card/Card";

import styles from "./CardsList.module.scss";
import { selectVisibleArticles } from "redux/selectors";

export const CardsList = function () {
  const articles = useSelector(selectVisibleArticles);
  return (
    <ul className={styles.cardsList}>
      {articles.map((article) => {
        return <Card key={article.articleId} {...article} />;
      })}
    </ul>
  );
};
