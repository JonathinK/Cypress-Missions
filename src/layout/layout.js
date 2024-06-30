import React from "react";
import { PageWrapper } from "../styles";
import { Header } from "../components";
import PageFooter from "../components/footer";

export const Layout = ({ element }) => {
  return(
   <PageWrapper>
    <Header/>
       {element}
    <PageFooter/>
   </PageWrapper>
  )
}