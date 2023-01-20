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
  filter,
}) {
  const location = useLocation();
  // const descr = formatServices.formatContent(description);
  const newTitle = formatServices.highlightSearchResults(filter, title);
  const newDescr = formatServices.highlightSearchResults(filter, description);
  const formattedDate = formatServices.formatDate(published);

  return (
    <li className={styles.card}>
      <div className={styles.thumb}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.card__box}>
        <div className={styles.card__contentBox}>
          <p className={styles.card__date}>
            <CiCalendar size={16} style={{ color: "currentColor" }} />
            {formattedDate}
          </p>
          <div className={styles.card__info}>
            <h2 className={styles.card__title}>{newTitle}</h2>
            <p className={styles.card__description}>{newDescr}</p>
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
