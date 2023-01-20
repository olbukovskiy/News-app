import { searchLatestNews } from "services/news-service";
import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect, useMemo } from "react";
// import formatServices from "services/services";

import styles from "./Home.module.scss";
import { useError } from "hooks/useError";

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
    setFilterValue(filterValue.trim());
  };

  const visibleArticles = useMemo(() => {
    const keys = ["title", "description"];
    return articles.filter((article) => {
      return keys.some((key) => {
        return article[key].toLowerCase().includes(filterValue.toLowerCase());
      });
    });
  }, [articles, filterValue]);

  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <div className={styles.wrapper}>
          <FilterBar onChange={onChange} />
          <p className={styles.result}>
            <span className={styles.result__title}>Result:</span>
            {visibleArticles.length}
          </p>
          {articles.length > 0 && <CardsList articles={visibleArticles} />}
          {isLoading && <Loader />}
        </div>
      </Container>
    </section>
  );
};
