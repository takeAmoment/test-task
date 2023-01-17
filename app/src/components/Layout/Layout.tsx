import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React, { FC } from "react";
import { LayoutProps } from "../../types/types";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
