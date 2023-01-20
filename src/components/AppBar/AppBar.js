import { AppBar, Typography } from "@mui/material";
import { Container } from "components/Container/Container";
import { Navigation } from "components/Navigation/Navigation";
import { GiNewspaper } from "react-icons/gi";

import styles from "./AppBar.module.scss";

export const AppBarComponent = function () {
  return (
    <AppBar className={styles.appBar} position="fixed">
      <Container>
        <div className={styles.appBar__wrapper}>
          <div className={styles.appBar__logo}>
            <GiNewspaper size={36} />
            <Typography variant="h4" component="p">
              <span className={styles.appBar__text}>NEWS APP</span>
            </Typography>
          </div>
          <Navigation />
        </div>
      </Container>
    </AppBar>
  );
};
