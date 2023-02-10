import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "urls";
import formatServices from "services/services";
import { AppDispatch, RootState } from "./store";
import { IArticle, IArticles, IArticlesResponse } from "types";

export type IError = {
  message?: string;
  [property: string]: any;
};

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: IError;
}>();

export const fetchArticles = createAppAsyncThunk<IArticles[], void>(
  "articles/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IArticlesResponse[]>(
        URLS.trendingsUrl()
      );
      const data: IArticles[] = response.data.map(
        ({ id, imageUrl, publishedAt, summary, title }) => {
          const description: string = formatServices.formatContent(summary);
          return {
            articleId: id,
            image: imageUrl,
            published: publishedAt,
            description,
            title,
          };
        }
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IError);
    }
  }
);

export const fetchArticleById = createAppAsyncThunk<IArticle, string>(
  "articles/fetchById",
  async (articleId: string, thunkAPI) => {
    try {
      const response = await axios.get<IArticlesResponse>(
        URLS.searchById(articleId)
      );
      const {
        data: { summary: content, title },
      } = response;
      return { content, title };
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IError);
    }
  }
);
