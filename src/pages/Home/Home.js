import { searchLatestNews } from "api/news-service";
import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";

import styles from "./Home.module.scss";

export const Home = function () {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [filterValue, setFilterValue] = useState("");

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
  }, []);

  useEffect(() => {
    if (!isError) return;

    toast.error("Houston we have a problem");
  }, [isError]);

  const onChange = (event) => {
    const filterValue = event.target.value;
    setFilterValue(filterValue.trim());
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      return article.title.toLowerCase().includes(filterValue.toLowerCase());
    });
  }, [articles, filterValue]);

  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <div className={styles.wrapper}>
          <FilterBar onChange={onChange} />
          <p className={styles.result}>
            <span className={styles.result__title}>Result:</span>
            {filteredArticles.length}
          </p>
          {articles.length > 0 && <CardsList articles={filteredArticles} />}
          {isLoading && <Loader />}
        </div>
      </Container>
    </section>
  );
};
