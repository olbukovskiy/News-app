import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import { AppBarComponent } from "components/AppBar/AppBar";
// import { Footer } from "../Footer/Footer";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = function () {
  return (
    <div>
      {/* <AppBarComponent style={{ position: "fixed", zIndex: "10000" }} /> */}
      <main>
        {
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        }
      </main>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
};
