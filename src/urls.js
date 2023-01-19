// const KEY = "KT9PKkfNtt7RzrovU9B86lPP6ekDu72iAhK3soZc";

// export const URLS = Object.freeze({
//   trendingsUrl() {
//     return `https://api.thenewsapi.com/v1/news/all?api_token=${KEY}&language=en&limit=24`;
//   },
//   searchByQuery(searchQuery) {
//     return `https://api.thenewsapi.com/v1/news/all?api_token=${KEY}&language=en&limit=24&search=${searchQuery}`;
//   },
//   searchById(articleId) {
//     return `https://api.thenewsapi.com/v1/news/uuid/${articleId}?api_token=${KEY}`;
//   },
// });

// https://api.spaceflightnewsapi.net/
// /v3/articles

// /v3/articles/${articleId}

// _limit

// _sort;
// =
// _contains;

export const URLS = Object.freeze({
  trendingsUrl() {
    return `https://api.spaceflightnewsapi.net/v3/articles?_limit=24`;
  },
  searchByQuery(searchQuery) {
    return `https://api.spaceflightnewsapi.net/v3/articles?_limit=24&=${searchQuery}`;
  },
  searchById(articleId) {
    return `https://api.spaceflightnewsapi.net/v3/articles/${articleId}`;
  },
});
