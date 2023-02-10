import { Container } from "components/Container/Container";
import styles from "./Footer.module.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.footer__text}>
          © {new Date().getFullYear()} <span>News App.</span>, Inc. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};
