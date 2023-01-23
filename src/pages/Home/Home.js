import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useError } from "hooks/useError";
import { Typography } from "@mui/material";

import { selectVisibleArticles } from "redux/selectors";
import { fetchArticles } from "redux/operations";
import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { Loader } from "components/Loader/Loader";

import styles from "./Home.module.scss";

export const Home = function () {
  const dispatch = useDispatch();
  const visibleArticles = useSelector(selectVisibleArticles);
  const { isLoading, isError } = useError();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <section className={styles.home}>
      <Container>
        <div className={styles.wrapper}>
          <FilterBar />
          <p className={styles.result}>
            <span className={styles.result__title}>Result:</span>
            {visibleArticles.length}
          </p>
          <CardsList />
          {visibleArticles.length === 0 && (
            <Typography
              style={{ margin: "0  auto" }}
              variant="h3"
              component="h2"
            >
              No matching articles
            </Typography>
          )}
          {isLoading && isError === "" && <Loader />}
        </div>
      </Container>
    </section>
  );
};
