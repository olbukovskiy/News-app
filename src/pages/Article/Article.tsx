import { useEffect } from "react";
import hooks from "hooks";
import { Link, useLocation, useParams } from "react-router-dom";

import { fetchArticleById } from "redux/operations";
import { routes } from "routes";

import { BsArrowLeftShort } from "react-icons/bs";
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";

import styles from "./Article.module.scss";

const { useAppDispatch, useArticle } = hooks;

export const Article = function () {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { articleId } = useParams<{ articleId: string }>();
  const { isLoading, article, error } = useArticle();

  const backLinkHref: string = location.state?.from ?? routes.HOME;

  useEffect(() => {
    if (typeof articleId === "string") {
      dispatch(fetchArticleById(articleId));
    }
  }, [dispatch, articleId]);

  return (
    <div className={styles.article}>
      <Container>
        {article && (
          <div className={styles.article__wrapper}>
            <h2 className={styles.article__title}>{article.title}</h2>
            <p className={styles.article__content}>{article.content}</p>
          </div>
        )}
        <Link className={styles.backLink} to={backLinkHref}>
          <BsArrowLeftShort size={28} />
          Back to homepage
        </Link>
        {isLoading && error === "" && <Loader />}
      </Container>
    </div>
  );
};
