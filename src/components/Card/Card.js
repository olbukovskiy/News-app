import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
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
        <div className={styles.card__contentBox}>
          <p className={styles.card__date}>
            <CiCalendar size={16} style={{ color: "currentColor" }} />
            {formatServices.formatDate(published)}
          </p>
          <div className={styles.card__info}>
            <h2 className={styles.card__title}>{title}</h2>
            <p className={styles.card__description}>
              {formatServices.formatContent(description)}
            </p>
          </div>
        </div>
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

Card.propTypes = {
  articleId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}.isRequired;
