import { Home } from "pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Article } from "pages/Article/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ARTICLE_ID} element={<Article />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
