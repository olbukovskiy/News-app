import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectArticle,
  selectArticleError,
  selectArticleIsLoading,
  selectArticles,
  selectError,
  selectIsLoading,
  selectVisibleArticles,
} from "redux/selectors";

export const useArticles = function () {
  const articles = useSelector(selectArticles);
  const visibleArticles = useSelector(selectVisibleArticles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error === "") return;

    toast.error("Houston we have a problem1", { autoClose: 3000 });
  }, [error]);

  return { articles, isLoading, error, visibleArticles };
};

export const useArticle = function () {
  const article = useSelector(selectArticle);
  const isLoading = useSelector(selectArticleIsLoading);
  const error = useSelector(selectArticleError);

  useEffect(() => {
    if (error === "") return;

    toast.error("Houston we have a problem2", { autoClose: 3000 });
  }, [error]);

  return { article, isLoading, error };
};

const hooks = { useArticle, useArticles };

export default hooks;
