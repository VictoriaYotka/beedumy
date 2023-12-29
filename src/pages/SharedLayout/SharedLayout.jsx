import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Layout/Header/Header";
import Loading from "../Loading/Loading";
// import Footer from "../../components/Layout/Footer/Footer";
import BackToTopButton from "../../components/Layout/BackToTopButton/BackToTopButton";
const Footer = lazy(() => import("../../components/Layout/Footer/Footer"));

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main_wrapper">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
};

export default SharedLayout;
