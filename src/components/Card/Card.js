import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import { CiCalendar } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";

import styles from "./Card.module.scss";

export const Card = function ({ article }) {
  function formatDate(time) {
    return format(Date.parse(time), "dd MMMM yyyy, HH:mm");
  }

  let articleId;
  return (
    <li className={styles.card}>
      <Paper elevation={2}>
        <div className={styles.thumb}>
          <img src={article.src} alt={article.alt} />
        </div>
        <Typography className={styles.card__date} variant="body1" component="p">
          <CiCalendar size={16} style={{ color: "currentColor" }} />
          {formatDate(article.date)}
        </Typography>
        <Typography className={styles.card__title} variant="h4" component="h2">
          article.title
        </Typography>
        <Typography
          className={styles.card__content}
          variant="body1"
          component="p"
        >
          Some content
        </Typography>
        <Link className={styles.card__link} to={`/${articleId}`}>
          <BsArrowRightShort size={12} />
          <span>Read more</span>
        </Link>
      </Paper>
    </li>
  );
};

// 12 April 2022, 18:00
// June 1st, 2021
