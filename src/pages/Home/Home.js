import { useState, useEffect, useMemo } from "react";

import { searchLatestNews } from "services/news-service";
import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { Loader } from "components/Loader/Loader";

import styles from "./Home.module.scss";
import { useError } from "hooks/useError";
import { Typography } from "@mui/material";

export const Home = function () {
  const [articles, setArticles] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const { isLoading, setIsLoading, setIsError } = useError();

  useEffect(() => {
    searchLatestNews()
      .then((response) => {
        setArticles(response);
        setIsError("");
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsError, setIsLoading]);

  const onChange = (event) => {
    const filterValue = event.target.value;
    setFilterValue(filterValue.trim().toLowerCase());
  };

  const visibleArticles = useMemo(() => {
    const keys = ["title", "description"];
    return articles.filter((article) => {
      return keys.some((key) => {
        return article[key].toLowerCase().includes(filterValue);
      });
    });
  }, [articles, filterValue]);

  return (
    <section className={styles.home}>
      <Container>
        <div className={styles.wrapper}>
          <FilterBar onChange={onChange} />
          <p className={styles.result}>
            <span className={styles.result__title}>Result:</span>
            {visibleArticles.length}
          </p>
          {articles.length > 0 && (
            <CardsList filter={filterValue} articles={visibleArticles} />
          )}
          {visibleArticles.length === 0 && (
            <Typography
              style={{ margin: "0  auto" }}
              variant="h2"
              component="h2"
            >
              No matching articles
            </Typography>
          )}
          {isLoading && <Loader />}
        </div>
      </Container>
    </section>
  );
};
