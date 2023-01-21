import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useError } from "hooks/useError";
import { searchLatestNews } from "services/news-service";
import { Typography } from "@mui/material";
import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { Loader } from "components/Loader/Loader";

import styles from "./Home.module.scss";

export const Home = function () {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, setIsLoading, setIsError } = useError();
  const filterValue = searchParams.get("search") ?? "";

  const onChange = (event) => {
    const filterValue = event.target.value.trim().toLowerCase();
    const filterQuery = filterValue !== "" ? { search: filterValue } : {};
    setSearchParams(filterQuery);
  };

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

  const visibleArticles = useMemo(() => {
    const filteredByTitle = articles.filter((article) => {
      return article.title.toLowerCase().includes(filterValue);
    });

    const filteredByContent = articles.filter((article) => {
      return article.description.toLowerCase().includes(filterValue);
    });

    const uniqueArticlesArray = [
      ...filteredByTitle,
      ...filteredByContent,
    ].filter((article, index, articlesArray) => {
      return articlesArray.indexOf(article) === index;
    });

    return uniqueArticlesArray;
  }, [articles, filterValue]);

  return (
    <section className={styles.home}>
      <Container>
        <div className={styles.wrapper}>
          <FilterBar filterValue={filterValue} onChange={onChange} />
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
