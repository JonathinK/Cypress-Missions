import React, { useEffect } from "react";
import { Global, PageWrapper } from "../styles";
import { Header, PageFooter } from "../components";
import { Helmet } from "react-helmet";

export const Layout = ({ element }) => {

  return (
    <PageWrapper>
      <Global />
      <Header />
      {element}
      <PageFooter />
    </PageWrapper>
  );
};