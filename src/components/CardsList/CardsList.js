import PropTypes from "prop-types";
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

CardsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      articleId: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      published: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
