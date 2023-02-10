import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectArticles = (state: RootState) => state.articles.articles;

export const selectIsLoading = (state: RootState) => state.articles.isLoading;

export const selectError = (state: RootState) => state.articles.error;

export const selectArticle = (state: RootState) => state.article.article;

export const selectArticleError = (state: RootState) => state.article.error;

export const selectArticleIsLoading = (state: RootState) =>
  state.article.isLoading;

export const selectFilterValue = (state: RootState) => state.filter;

export const selectVisibleArticles = createSelector(
  [selectArticles, selectFilterValue],
  (articles, filterValue) => {
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
  }
);
