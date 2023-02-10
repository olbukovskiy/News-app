export interface IArticle {
  title?: string;
  content?: string;
}

export interface IArticles {
  articleId: number;
  image: string;
  published: string;
  description: string;
  title: string;
}

export interface IArticlesResponse {
  id: number;
  imageUrl: string;
  publishedAt: string;
  summary: string;
  title: string;
}

export interface IArticleResponse {
  title: string;
  summary: string;
}
