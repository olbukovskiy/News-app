import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "routes";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() =>
  import("pages/Home/Home").then((module) => {
    return { ...module, default: module.Home };
  })
);

const Article = lazy(() =>
  import("pages/Article/Article").then((module) => {
    return { ...module, default: module.Article };
  })
);

const SharedLayout = lazy(() =>
  import("components/SharedLayout/SharedLayout").then((module) => {
    return { ...module, default: module.SharedLayout };
  })
);

function App() {
  return (
    <>
      <Routes>
        <Route end path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.ARTICLE_ID} element={<Article />} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
