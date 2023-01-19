import { Paper, Typography } from "@mui/material";
import { Container } from "components/Container/Container";
import { BsArrowRightShort } from "react-icons/bs";

import styles from "./Article.module.scss";

export const Article = function () {
  return (
    <div className={styles.article}>
      <Container>
        <Paper className={styles.article__wrapper} elevation={2}>
          <Typography variant="h4" component="h2">
            Article title
          </Typography>
          <Typography variant="body1" component="p">
            article content
          </Typography>
        </Paper>
        <a className={styles.backLink} href="to home">
          Back to articles
          <BsArrowRightShort size={12} />
        </a>
      </Container>
    </div>
  );
};
