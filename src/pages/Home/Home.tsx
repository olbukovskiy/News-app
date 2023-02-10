import { useEffect } from "react";
import { Typography } from "@mui/material";

import hooks from "hooks";
import { fetchArticles } from "redux/operations";

import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { SkeletonList } from "components/Skeleton/SkeletonList/SkeletonList";

import styles from "./Home.module.scss";

const { useAppDispatch, useArticles } = hooks;

export const Home = function () {
  const dispatch = useAppDispatch();
  const { isLoading, error, visibleArticles } = useArticles();

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
          {isLoading && error === null && <SkeletonList />}

          {visibleArticles.length === 0 && !isLoading && (
            <Typography
              style={{ margin: "0  auto" }}
              variant="h3"
              component="h2"
            >
              No matching articles
            </Typography>
          )}
        </div>
      </Container>
    </section>
  );
};
