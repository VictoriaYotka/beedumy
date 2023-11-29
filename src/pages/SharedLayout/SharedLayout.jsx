import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Layout/Header/Header";
import Loading from "../Loading/Loading";
import Footer from "../../components/Layout/Footer/Footer";
import BackToTopButton from "../../components/Layout/BackToTopButton/BackToTopButton";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
};

export default SharedLayout;
