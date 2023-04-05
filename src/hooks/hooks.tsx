import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { RootState, AppDispatch } from "redux/store";
import {
  selectArticle,
  selectArticleError,
  selectArticleIsLoading,
  selectArticles,
  selectError,
  selectIsLoading,
  selectVisibleArticles,
} from "../redux/selectors";

function useArticles() {
  const articles = useSelector(selectArticles);
  const visibleArticles = useSelector(selectVisibleArticles);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error === null) return;

    toast.error("Houston we have a problem", { autoClose: 3000 });
  }, [error]);

  return { articles, isLoading, error, visibleArticles };
}

function useArticle() {
  const article = useSelector(selectArticle);
  const isLoading = useSelector(selectArticleIsLoading);
  const error = useSelector(selectArticleError);

  useEffect(() => {
    if (error === null) return;

    toast.error("Houston we have a problem", { autoClose: 3000 });
  }, [error]);

  return { article, isLoading, error };
}

type DispatchFunc = () => AppDispatch;

const useAppDispatch: DispatchFunc = useDispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const hooks = { useArticle, useArticles, useAppDispatch, useAppSelector };

export default hooks;
