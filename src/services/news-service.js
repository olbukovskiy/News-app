import axios from "axios";
import { URLS } from "urls";

export const searchLatestNews = async function () {
  const response = await axios.get(URLS.trendingsUrl());
  const data = response.data.map(
    ({
      id: articleId,
      imageUrl: image,
      publishedAt: published,
      summary: description,
      title,
    }) => {
      return { articleId, image, published, description, title };
    }
  );
  return data;
};

export const searchByQuery = async function (searchQuery) {
  const response = await axios.get(URLS.searchByQuery(searchQuery));
  const data = response.data.map(
    ({
      id: articleId,
      imageUrl: image,
      publishedAt: published,
      summary: description,
      title,
    }) => {
      return { articleId, image, published, description, title };
    }
  );
  return data;
};

export const searchById = async function (articleId) {
  const response = await axios.get(URLS.searchById(articleId));
  const {
    data: { summary: content, title },
  } = response;
  return { content, title };
};
