import React, { useEffect } from "react";
import { Global, PageWrapper } from "../styles";
import { Header, PageFooter } from "../components";
import { Helmet } from "react-helmet";

export const Layout = ({ element }) => {

  const SetCookie = () => {
    useEffect(() => {
      document.cookie = 'name=value; SameSite=Lax; Secure';
    }, []);

    return null;
  };

  return (
    <PageWrapper>
      <SetCookie />
      <Global />
      <Header />
      {element}
      <PageFooter />
    </PageWrapper>
  );
};