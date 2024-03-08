import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Layout/Header/Header";
// import Footer from "../../components/Layout/Footer/Footer";
import BackToTopButton from "../../components/Layout/BackToTopButton/BackToTopButton";
import Loader from "../Loader/Loader";
const Footer = lazy(() => import("../../components/Layout/Footer/Footer"));

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main_wrapper">
          <Suspense fallback={<Loader />}>
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
