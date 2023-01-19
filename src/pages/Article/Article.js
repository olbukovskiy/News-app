import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { routes } from "routes";
import { searchById } from "api/news-service";
import { Container } from "components/Container/Container";
import { BsArrowLeftShort } from "react-icons/bs";
import { toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";

import styles from "./Article.module.scss";

export const Article = function () {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const location = useLocation();
  const { articleId } = useParams();
  const backLinkHref = location.state?.from ?? routes.HOME;

  useEffect(() => {
    if (!articleId) {
      return;
    }

    searchById(articleId)
      .then((data) => {
        setArticle(data);
        setIsError("");
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [articleId]);

  useEffect(() => {
    if (!isError) return;

    toast.error("Houston we have a problem");
  }, [isError]);

  return (
    <div className={styles.article}>
      <Container>
        {article && (
          <div className={styles.article__wrapper}>
            <h2 className={styles.article__title} variant="h4" component="h2">
              {article.title}
            </h2>
            <p className={styles.article__content}>{article.content}</p>
          </div>
        )}
        <Link className={styles.backLink} to={backLinkHref}>
          <BsArrowLeftShort size={28} />
          Back to articles
        </Link>
        {isLoading && <Loader />}
      </Container>
    </div>
  );
};
