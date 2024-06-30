import React from "react";
import { Global, PageWrapper } from "../styles";
import { Header } from "../components";
import { PageFooter } from "../components";

export const Layout = ({ element }) => {
  return(
   <PageWrapper>
   <Global/>
    <Header/>
       {element}
    <PageFooter/>
   </PageWrapper>
  )
}