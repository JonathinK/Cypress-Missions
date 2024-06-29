import React from "react";
import { PageWrapper } from "../styles";
import { PageFooter, Header } from "../components";

export const Layout = ({ element }) => {
  return(
   <PageWrapper>
    <Header/>
       {element}
    <PageFooter/>
   </PageWrapper>
  )
}