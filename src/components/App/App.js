import { SharedLayout } from "layout/SharedLayout/SharedLayout";
import { Home } from "pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.ARTICLE_ID} element={<div>Article</div>} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
