import { createSelector } from "@reduxjs/toolkit";

export const selectArticles = (state) => state.articlesSlice.articles;

export const selectFilterValue = (state) => state.filterSlice;

export const selectIsLoading = (state) => state.articlesSlice.isLoading;

export const selectError = (state) => state.articlesSlice.error;

export const selectArticle = (state) => state.articleSlice.article;

export const selectArticleError = (state) => state.articleSlice.error;

export const selectArticleIsLoading = (state) => state.articleSlice.isLoading;

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
