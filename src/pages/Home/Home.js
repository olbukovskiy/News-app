import {
  searchById,
  searchByQuery,
  searchLatestNews,
  searchTrendingNews,
} from "api/news-service";
import { CardsList } from "components/CardsList/CardsList";
import { Container } from "components/Container/Container";
import { FilterBar } from "components/FilterBar/FilterBar";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import styles from "./Home.module.scss";

export const Home = function () {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  searchById("555fdc75-ef7b-412d-b38a-b858ca1a9804").then(console.log);

  // useEffect(() => {
  //   searchTrendingNews()
  //     .then((response) => {

  //       setIsError("");
  //     })
  //     .catch((error) => {
  //       setIsError(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!isError) return;

  //   toast.error("Houston we have a problem");
  // }, [isError]);

  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <div className={styles.wrapper}>
          <FilterBar />
          <p className={styles.result}>
            <span className={styles.result__title}>Result:</span>555
          </p>
          {articles.length > 0 && <CardsList />}
          {/* {isLoading && <Loader />} */}
        </div>
      </Container>
    </section>
  );
};
