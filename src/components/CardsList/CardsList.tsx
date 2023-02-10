import { Card } from "components/Card/Card";

import styles from "./CardsList.module.scss";
import { selectVisibleArticles } from "redux/selectors";
import hooks from "hooks";

const { useAppSelector } = hooks;

export const CardsList: React.FunctionComponent = () => {
  const articles = useAppSelector(selectVisibleArticles);
  return (
    <ul className={styles.cardsList}>
      {articles.map((article) => {
        return <Card key={article.articleId} {...article} />;
      })}
    </ul>
  );
};
