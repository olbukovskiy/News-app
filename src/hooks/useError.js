import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectArticleError,
  selectArticleIsLoading,
  selectError,
  selectIsLoading,
} from "redux/selectors";

export const useError = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const isArticleLoading = useSelector(selectArticleIsLoading);
  const isArticleError = useSelector(selectArticleError);

  useEffect(() => {
    if (isError === "") return;

    toast.error("Houston we have a problem1", { autoClose: 3000 });
  }, [isError]);

  useEffect(() => {
    if (isArticleError === "") return;

    toast.error("Houston we have a problem2", { autoClose: 3000 });
  }, [isArticleError]);

  return { isLoading, isError, isArticleError, isArticleLoading };
};
