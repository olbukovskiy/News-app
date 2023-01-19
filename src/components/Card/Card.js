import { Link, useLocation } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";

import formatServices from "../../services/services";

import styles from "./Card.module.scss";

export const Card = function ({
  articleId,
  image,
  published,
  description,
  title,
}) {
  const location = useLocation();

  return (
    <li className={styles.card}>
      <div className={styles.thumb}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.card__box}>
        <p className={styles.card__date}>
          <CiCalendar size={16} style={{ color: "currentColor" }} />
          {formatServices.formatDate(published)}
        </p>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__content}>
          {formatServices.formatContent(description)}
        </p>
        <Link
          className={styles.card__link}
          to={`/${articleId}`}
          state={{ from: location }}
        >
          <span>Read more</span>
          <BsArrowRightShort size={28} />
        </Link>
      </div>
    </li>
  );
};
