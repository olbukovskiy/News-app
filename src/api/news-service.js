import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net";

// "/v3/articles" get all articles
// "/v3/acticles/${id}" get current article

// _sort сортує за якимось полем
// ='якась строка з інпута'     для пошуку по запиту

// _in;
// array[string](query); Get records that matches any value in the array of values

// _contains
// string
// (query)
// Get records that contains a value

// _contains - Get records that contains a value
// _containss
// string
// (query)
// Get records that contains (case sensitive) a value

// export const searchTrendingNews = async () => {
//   try {
//     const response = await axios.get();
//   } catch (error) {
//     console.log(error.message);
//   }
// };
