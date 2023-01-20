import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppBarComponent } from "components/AppBar/AppBar";
import { Footer } from "../Footer/Footer";
import { Loader } from "components/Loader/Loader";

import styles from "./SharedLayout.module.scss";

export const SharedLayout = function () {
  return (
    <div className={styles.body__wrapper}>
      <AppBarComponent className={styles.app__bar} />
      <main className={styles.main}>
        {
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        }
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};
