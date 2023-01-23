import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import { useError } from "hooks/useError";
import { selectArticle } from "redux/selectors";
import { fetchArticleById } from "redux/operations";
import { routes } from "routes";

import { BsArrowLeftShort } from "react-icons/bs";
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";

import styles from "./Article.module.scss";

export const Article = function () {
  const dispatch = useDispatch();
  const location = useLocation();
  const article = useSelector(selectArticle);
  const { articleId } = useParams();
  const { isArticleLoading, isArticleError } = useError();

  const backLinkHref = location.state?.from ?? routes.HOME;

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
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
        {isArticleLoading && isArticleError === "" && <Loader />}
      </Container>
    </div>
  );
};
