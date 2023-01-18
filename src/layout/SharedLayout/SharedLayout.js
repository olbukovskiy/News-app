import { Footer } from "layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const SharedLayout = function () {
  return (
    <div>
      <main>{<Outlet />}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};
