import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "urls";
import formatServices from "services/services";

export const fetchArticles = createAsyncThunk(
  "articles/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URLS.trendingsUrl());
      const data = response.data.map(
        ({
          id: articleId,
          imageUrl: image,
          publishedAt: published,
          summary,
          title,
        }) => {
          const description = formatServices.formatContent(summary);
          return { articleId, image, published, description, title };
        }
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  "articles/fetchById",
  async (articleId, thunkAPI) => {
    try {
      const response = await axios.get(URLS.searchById(articleId));
      const {
        data: { summary: content, title },
      } = response;
      return { content, title };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
