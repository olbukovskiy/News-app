import { createSelector } from "@reduxjs/toolkit";

export const selectArticles = (state) => state.articles.articles;

export const selectIsLoading = (state) => state.articles.isLoading;

export const selectError = (state) => state.articles.error;

export const selectArticle = (state) => state.article.article;

export const selectArticleError = (state) => state.article.error;

export const selectArticleIsLoading = (state) => state.article.isLoading;

export const selectFilterValue = (state) => state.filter;

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
